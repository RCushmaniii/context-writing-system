/**
 * Writing System Explorer - Survey Engine (Typeform-style)
 * Full-screen, one-question-at-a-time interactive survey experience
 */

class SurveyEngine {
  constructor(options = {}) {
    this.containerId = options.containerId || 'survey-container';
    this.surveyData = null;
    this.answers = {};
    this.questions = [];
    this.currentIndex = -1; // -1 = welcome screen
    this.autoSaveDelay = 500;
    this.autoSaveTimer = null;
    this.keyboardEnabled = true;
  }

  /**
   * Load survey definition from JSON
   */
  async load(jsonPath) {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) throw new Error(`Failed to load: ${response.status}`);
      this.surveyData = await response.json();
      this.flattenQuestions();
      this.loadSavedAnswers();
      return this.surveyData;
    } catch (error) {
      console.error('Survey load error:', error);
      throw error;
    }
  }

  /**
   * Flatten all questions from sections into single array
   */
  flattenQuestions() {
    this.questions = [];
    if (!this.surveyData?.sections) return;

    this.surveyData.sections.forEach(section => {
      if (section.questions) {
        section.questions.forEach(q => {
          this.questions.push({
            ...q,
            sectionTitle: section.title,
            sectionId: section.id
          });
        });
      }
    });
  }

  /**
   * Load saved answers from localStorage
   */
  loadSavedAnswers() {
    const key = `survey_${this.surveyData._meta?.id || 'default'}`;
    try {
      const saved = localStorage.getItem(key);
      if (saved) this.answers = JSON.parse(saved);
    } catch (e) {
      this.answers = {};
    }
  }

  /**
   * Save answers to localStorage
   */
  saveAnswers() {
    const key = `survey_${this.surveyData._meta?.id || 'default'}`;
    localStorage.setItem(key, JSON.stringify(this.answers));
    this.updateAutoSaveIndicator('saved');
  }

  /**
   * Schedule auto-save
   */
  scheduleAutoSave() {
    this.updateAutoSaveIndicator('saving');
    clearTimeout(this.autoSaveTimer);
    this.autoSaveTimer = setTimeout(() => this.saveAnswers(), this.autoSaveDelay);
  }

  /**
   * Update auto-save indicator
   */
  updateAutoSaveIndicator(status) {
    const dot = document.querySelector('.survey-autosave-dot');
    const text = document.querySelector('.survey-autosave-text');
    if (dot) dot.classList.toggle('saving', status === 'saving');
    if (text) text.textContent = status === 'saving' ? 'Saving...' : 'Saved';
  }

  /**
   * Set answer value
   */
  setAnswer(questionId, value) {
    this.answers[questionId] = value;
    this.scheduleAutoSave();
    this.updateProgress();
  }

  /**
   * Get answer value
   */
  getAnswer(questionId) {
    return this.answers[questionId];
  }

  /**
   * Update progress bar
   */
  updateProgress() {
    const total = this.questions.length;
    const answered = this.getAnsweredCount();
    const percent = total > 0 ? (answered / total) * 100 : 0;

    const fill = document.querySelector('.survey-progress-fill');
    if (fill) fill.style.width = `${percent}%`;

    const indicator = document.querySelector('.survey-step-indicator');
    if (indicator && this.currentIndex >= 0) {
      indicator.textContent = `${this.currentIndex + 1} of ${total}`;
    }
  }

  /**
   * Get answered count
   */
  getAnsweredCount() {
    return this.questions.filter(q => {
      const answer = this.answers[q.id];
      return answer !== undefined && answer !== null && answer !== '' &&
             !(Array.isArray(answer) && answer.length === 0);
    }).length;
  }

  /**
   * Navigate to specific question
   */
  goTo(index) {
    this.currentIndex = Math.max(-1, Math.min(index, this.questions.length));

    // Update slides
    const slides = document.querySelectorAll('.survey-slide');
    slides.forEach((slide, i) => {
      const adjustedIndex = i - 1; // Account for welcome slide at index 0
      slide.classList.remove('active', 'exit-up', 'exit-down');

      if (adjustedIndex === this.currentIndex) {
        slide.classList.add('active');
        // Focus first input (but not on complete screen)
        if (this.currentIndex < this.questions.length) {
          setTimeout(() => {
            const input = slide.querySelector('input, textarea');
            if (input) input.focus();
          }, 100);
        }
      } else if (adjustedIndex < this.currentIndex) {
        slide.classList.add('exit-up');
      } else {
        slide.classList.add('exit-down');
      }
    });

    this.updateProgress();

    // Populate answers summary when going to complete slide
    if (this.currentIndex === this.questions.length) {
      this.populateAnswersSummary();
    }
  }

  /**
   * Go to next question
   */
  next() {
    if (this.currentIndex < this.questions.length) {
      this.goTo(this.currentIndex + 1);
    }
  }

  /**
   * Go to previous question
   */
  prev() {
    if (this.currentIndex > -1) {
      this.goTo(this.currentIndex - 1);
    }
  }

  /**
   * Render the full survey app
   */
  render() {
    const container = document.getElementById(this.containerId);
    if (!container || !this.surveyData) return;

    const meta = this.surveyData._meta || {};
    const totalQuestions = this.questions.length;

    container.innerHTML = `
      <div class="survey-app">
        <div class="survey-progress">
          <div class="survey-progress-fill" style="width: 0%"></div>
        </div>

        <div class="survey-header">
          <button class="survey-close-btn" data-action="close" title="Close survey">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="survey-slides">
          ${this.renderWelcomeSlide(meta, totalQuestions)}
          ${this.questions.map((q, i) => this.renderQuestionSlide(q, i, totalQuestions)).join('')}
          ${this.renderCompleteSlide(meta)}
        </div>

        <div class="survey-footer">
          <div class="survey-autosave">
            <span class="survey-autosave-dot"></span>
            <span class="survey-autosave-text">Saved</span>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
    this.goTo(-1); // Start at welcome
    this.updateProgress();
  }

  /**
   * Render welcome slide
   */
  renderWelcomeSlide(meta, totalQuestions) {
    const estimatedTime = Math.ceil(totalQuestions * 0.5);

    return `
      <div class="survey-slide active" data-slide="welcome">
        <div class="survey-slide-content survey-welcome">
          <div class="survey-welcome-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h1>${meta.title || 'Survey'}</h1>
          <p>${meta.description || 'Please answer the following questions.'}</p>
          <div class="survey-welcome-meta">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              ~${estimatedTime} minutes
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              ${totalQuestions} questions
            </span>
          </div>
          <button class="survey-start-btn" data-action="start">
            Start Survey
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Render a question slide
   */
  renderQuestionSlide(question, index, total) {
    const isLast = index === total - 1;
    return `
      <div class="survey-slide" data-slide="${index}" data-question-id="${question.id}">
        <div class="survey-slide-content">
          <div class="survey-question-meta">
            <span class="survey-step-number">${index + 1} of ${total}</span>
            <span class="survey-step-arrow">→</span>
            <span class="survey-section-name">${question.sectionTitle}</span>
          </div>
          <label class="survey-question-label">${question.label}</label>
          ${question.hint ? `<p class="survey-question-hint">${question.hint}</p>` : ''}
          ${this.renderInput(question)}
          <div class="survey-inline-nav">
            <button class="survey-nav-btn" data-nav="prev" ${index === 0 ? 'disabled' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              <span>Back</span>
            </button>
            ${isLast ? `
              <button class="survey-nav-btn primary" data-action="complete">
                <span>Complete</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            ` : `
              <button class="survey-nav-btn primary" data-nav="next">
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render input based on question type
   */
  renderInput(question) {
    switch (question.type) {
      case 'slider': return this.renderSlider(question);
      case 'choice': return this.renderChoice(question);
      case 'multiselect': return this.renderMultiselect(question);
      case 'text': return this.renderText(question);
      case 'textarea': return this.renderTextarea(question);
      default: return `<p>Unknown type: ${question.type}</p>`;
    }
  }

  /**
   * Render slider
   */
  renderSlider(question) {
    const value = this.getAnswer(question.id) ?? question.default ??
                  Math.round((question.min + question.max) / 2);
    const labels = question.labels || {};

    return `
      <div class="survey-slider-container">
        <input type="range" class="survey-slider" data-question-id="${question.id}"
               min="${question.min || 1}" max="${question.max || 10}"
               value="${value}" step="${question.step || 1}">
        <div class="survey-slider-labels">
          <span>${labels.left || question.min || 1}</span>
          <span>${labels.right || question.max || 10}</span>
        </div>
        <div class="survey-slider-value" data-value-display="${question.id}">${value}</div>
      </div>
    `;
  }

  /**
   * Render choice (radio)
   */
  renderChoice(question) {
    const currentValue = this.getAnswer(question.id);
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    return `
      <div class="survey-choice-group" data-question-id="${question.id}">
        ${question.options.map((opt, i) => {
          const isSelected = currentValue === opt.value;
          return `
            <label class="survey-choice-option ${isSelected ? 'selected' : ''}" data-key="${keys[i]}">
              <input type="radio" name="${question.id}" value="${opt.value}" ${isSelected ? 'checked' : ''}>
              <span class="survey-choice-key">${keys[i]}</span>
              <div class="survey-choice-label">
                <div class="survey-choice-label-text">${opt.label}</div>
                ${opt.description ? `<div class="survey-choice-label-desc">${opt.description}</div>` : ''}
              </div>
            </label>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Render multiselect (checkbox)
   */
  renderMultiselect(question) {
    const currentValues = this.getAnswer(question.id) || [];
    const maxSelect = question.maxSelect || question.options.length;
    const minSelect = question.minSelect || 0;
    const atMax = currentValues.length >= maxSelect;

    return `
      <div class="survey-multiselect-group" data-question-id="${question.id}" data-max-select="${maxSelect}">
        <div class="survey-multiselect-hint">Select ${minSelect > 0 ? `${minSelect}-` : 'up to '}${maxSelect} options</div>
        ${question.options.map(opt => {
          const isSelected = currentValues.includes(opt.value);
          const isDisabled = !isSelected && atMax;
          return `
            <label class="survey-multiselect-option ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}">
              <input type="checkbox" name="${question.id}" value="${opt.value}"
                     ${isSelected ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
              <span class="survey-checkbox-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <div class="survey-choice-label">
                <div class="survey-choice-label-text">${opt.label}</div>
                ${opt.description ? `<div class="survey-choice-label-desc">${opt.description}</div>` : ''}
              </div>
            </label>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Render text input
   */
  renderText(question) {
    const value = this.getAnswer(question.id) || '';
    return `
      <input type="text" class="survey-text-input" data-question-id="${question.id}"
             placeholder="${question.placeholder || 'Type your answer here...'}"
             value="${this.escapeHtml(value)}"
             ${question.maxLength ? `maxlength="${question.maxLength}"` : ''}>
    `;
  }

  /**
   * Render textarea
   */
  renderTextarea(question) {
    const value = this.getAnswer(question.id) || '';
    const maxLength = question.maxLength || 2000;

    return `
      <textarea class="survey-textarea" data-question-id="${question.id}"
                placeholder="${question.placeholder || 'Type your answer here...'}"
                ${maxLength ? `maxlength="${maxLength}"` : ''}>${this.escapeHtml(value)}</textarea>
      <div class="survey-char-count" data-char-count="${question.id}">${value.length}/${maxLength}</div>
    `;
  }

  /**
   * Render completion slide
   */
  renderCompleteSlide(meta) {
    return `
      <div class="survey-slide" data-slide="complete">
        <div class="survey-slide-content survey-complete">
          <div class="survey-complete-header">
            <div class="survey-complete-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h1>Survey Complete</h1>
            <p>Your responses have been saved. Review your answers below.</p>
          </div>

          <div class="survey-answers-summary" id="survey-answers-summary">
            <!-- Populated dynamically -->
          </div>

          <div class="survey-complete-actions">
            <button class="survey-action-btn secondary" data-action="edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Make Edits
            </button>
            <button class="survey-action-btn secondary" data-action="restart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
              Start Over
            </button>
          </div>

          <div class="survey-complete-actions">
            <button class="survey-action-btn primary" data-action="download">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download JSON
            </button>
            <button class="survey-action-btn secondary" data-action="copy">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              Copy to Clipboard
            </button>
            <button class="survey-action-btn secondary" data-action="close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Close Survey
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Populate the answers summary on completion screen
   */
  populateAnswersSummary() {
    const container = document.getElementById('survey-answers-summary');
    if (!container) return;

    const summaryHtml = this.questions.map((q, i) => {
      const answer = this.getAnswer(q.id);
      let displayAnswer = '';

      if (answer === undefined || answer === null || answer === '') {
        displayAnswer = '<em>Not answered</em>';
      } else if (Array.isArray(answer)) {
        displayAnswer = answer.length > 0 ? answer.join(', ') : '<em>None selected</em>';
      } else if (q.type === 'choice') {
        const option = q.options?.find(opt => opt.value === answer);
        displayAnswer = option?.label || answer;
      } else {
        displayAnswer = this.escapeHtml(String(answer));
      }

      return `
        <div class="survey-answer-item" data-question-index="${i}">
          <div class="survey-answer-number">${i + 1}</div>
          <div class="survey-answer-content">
            <div class="survey-answer-question">${q.label}</div>
            <div class="survey-answer-value">${displayAnswer}</div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = summaryHtml;

    // Add click handlers to jump to questions
    container.querySelectorAll('.survey-answer-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.questionIndex, 10);
        this.goTo(index);
      });
    });
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    // Use event delegation for nav buttons (they're inline in each slide)
    container.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[data-nav]');
      if (navBtn) {
        const nav = navBtn.dataset.nav;
        if (nav === 'prev') this.prev();
        if (nav === 'next') this.next();
      }

      const actionBtn = e.target.closest('[data-action]');
      if (actionBtn) {
        this.handleAction(actionBtn.dataset.action);
      }
    });

    // Sliders
    container.querySelectorAll('.survey-slider').forEach(slider => {
      slider.addEventListener('input', (e) => this.handleSlider(e));
    });

    // Choice options
    container.querySelectorAll('.survey-choice-group input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => this.handleChoice(e));
    });

    // Multiselect options
    container.querySelectorAll('.survey-multiselect-group input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => this.handleMultiselect(e));
    });

    // Text inputs
    container.querySelectorAll('.survey-text-input').forEach(input => {
      input.addEventListener('input', (e) => this.handleText(e));
    });

    // Textareas
    container.querySelectorAll('.survey-textarea').forEach(textarea => {
      textarea.addEventListener('input', (e) => this.handleTextarea(e));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  /**
   * Handle keyboard navigation
   */
  handleKeyboard(e) {
    if (!this.keyboardEnabled) return;

    // Don't interfere with typing in inputs
    const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

    if (e.key === 'Enter' && !e.shiftKey) {
      if (isTyping && document.activeElement.tagName === 'TEXTAREA') return;
      e.preventDefault();

      if (this.currentIndex === this.questions.length - 1) {
        this.handleAction('complete');
      } else {
        this.next();
      }
    } else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      this.prev();
    } else if (!isTyping && /^[a-hA-H]$/.test(e.key)) {
      // Letter keys for choice selection
      const activeSlide = document.querySelector('.survey-slide.active');
      const option = activeSlide?.querySelector(`[data-key="${e.key.toUpperCase()}"]`);
      if (option) {
        option.click();
        setTimeout(() => this.next(), 300);
      }
    }
  }

  /**
   * Handle action buttons
   */
  handleAction(action) {
    switch (action) {
      case 'start':
        this.next();
        break;
      case 'complete':
        this.goTo(this.questions.length);
        this.populateAnswersSummary();
        break;
      case 'edit':
        this.goTo(0); // Go back to first question
        break;
      case 'restart':
        this.restart();
        break;
      case 'download':
        this.exportJSON();
        break;
      case 'copy':
        this.copyToClipboard();
        break;
      case 'close':
        this.close();
        break;
    }
  }

  /**
   * Restart survey - clear answers and go back to welcome
   */
  restart() {
    if (confirm('Are you sure you want to start over? All your answers will be cleared.')) {
      this.answers = {};
      const key = `survey_${this.surveyData._meta?.id || 'default'}`;
      localStorage.removeItem(key);
      this.render(); // Re-render the entire survey
    }
  }

  /**
   * Handle slider change
   */
  handleSlider(e) {
    const questionId = e.target.dataset.questionId;
    const value = parseInt(e.target.value, 10);

    const display = document.querySelector(`[data-value-display="${questionId}"]`);
    if (display) display.textContent = value;

    this.setAnswer(questionId, value);
  }

  /**
   * Handle choice change
   */
  handleChoice(e) {
    const group = e.target.closest('.survey-choice-group');
    const questionId = group.dataset.questionId;

    group.querySelectorAll('.survey-choice-option').forEach(opt => {
      opt.classList.toggle('selected', opt.querySelector('input').checked);
    });

    this.setAnswer(questionId, e.target.value);
  }

  /**
   * Handle multiselect change
   */
  handleMultiselect(e) {
    const group = e.target.closest('.survey-multiselect-group');
    const questionId = group.dataset.questionId;
    const maxSelect = parseInt(group.dataset.maxSelect, 10);

    const checkedValues = Array.from(group.querySelectorAll('input:checked'))
      .map(input => input.value);

    const atMax = checkedValues.length >= maxSelect;
    group.querySelectorAll('.survey-multiselect-option').forEach(opt => {
      const input = opt.querySelector('input');
      const isChecked = input.checked;
      opt.classList.toggle('selected', isChecked);
      opt.classList.toggle('disabled', !isChecked && atMax);
      input.disabled = !isChecked && atMax;
    });

    this.setAnswer(questionId, checkedValues);
  }

  /**
   * Handle text input
   */
  handleText(e) {
    this.setAnswer(e.target.dataset.questionId, e.target.value);
  }

  /**
   * Handle textarea
   */
  handleTextarea(e) {
    const questionId = e.target.dataset.questionId;
    const value = e.target.value;
    const maxLength = parseInt(e.target.getAttribute('maxlength'), 10) || 2000;

    const counter = document.querySelector(`[data-char-count="${questionId}"]`);
    if (counter) {
      counter.textContent = `${value.length}/${maxLength}`;
      counter.className = 'survey-char-count';
      if (value.length > maxLength * 0.9) {
        counter.classList.add(value.length >= maxLength ? 'over' : 'warning');
      }
    }

    this.setAnswer(questionId, value);
  }

  /**
   * Export as JSON download
   */
  exportJSON() {
    const data = {
      _meta: {
        surveyId: this.surveyData._meta?.id,
        surveyTitle: this.surveyData._meta?.title,
        targetProfile: this.surveyData._meta?.targetProfile,
        exportedAt: new Date().toISOString(),
        completionPercent: Math.round((this.getAnsweredCount() / this.questions.length) * 100)
      },
      answers: this.answers
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.surveyData._meta?.id || 'survey'}-answers-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showToast('Downloaded!');
  }

  /**
   * Copy to clipboard
   */
  async copyToClipboard() {
    const data = {
      _meta: {
        surveyId: this.surveyData._meta?.id,
        surveyTitle: this.surveyData._meta?.title,
        targetProfile: this.surveyData._meta?.targetProfile,
        exportedAt: new Date().toISOString()
      },
      answers: this.answers
    };

    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      this.showToast('Copied to clipboard!');
    } catch (err) {
      this.showToast('Failed to copy');
    }
  }

  /**
   * Close survey
   */
  close() {
    window.history.back();
  }

  /**
   * Show toast notification
   */
  showToast(message) {
    const existing = document.querySelector('.survey-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'survey-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  /**
   * Escape HTML
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Export
window.SurveyEngine = SurveyEngine;
