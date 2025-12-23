/**
 * Writing System Explorer - Common JavaScript Utilities
 * All paths are root-relative for Vercel deployment
 * No framework dependencies
 */

// ===== Navigation State Management =====

/**
 * Set active navigation link based on current page
 */
function setActiveNav() {
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const navLinks = document.querySelectorAll('.nav-links a, .secondary-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const normalizedHref = href.replace(/\/$/, '');

    const isActive =
      currentPath === normalizedHref ||
      (normalizedHref !== '/' && currentPath.startsWith(normalizedHref));

    link.classList.toggle('active', isActive);
  });
}

// ===== Collapsible Sections =====

/**
 * Initialize collapsible sections (mouse + keyboard accessible)
 */
function initCollapsibles() {
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(collapsible => {
    const header = collapsible.querySelector('.collapsible-header');
    if (!header) return;

    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute(
      'aria-expanded',
      collapsible.classList.contains('expanded')
    );

    const toggle = () => {
      const expanded = collapsible.classList.toggle('expanded');
      header.setAttribute('aria-expanded', expanded);
    };

    header.addEventListener('click', toggle);

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/**
 * Create a collapsible section programmatically
 */
function createCollapsible(title, content, expanded = false) {
  const collapsible = document.createElement('div');
  collapsible.className = `collapsible ${expanded ? 'expanded' : ''}`;

  collapsible.innerHTML = `
    <div class="collapsible-header" role="button" tabindex="0" aria-expanded="${expanded}">
      <span>${title}</span>
      <span class="collapsible-icon">▶</span>
    </div>
    <div class="collapsible-content">
      ${content}
    </div>
  `;

  const header = collapsible.querySelector('.collapsible-header');

  const toggle = () => {
    const isExpanded = collapsible.classList.toggle('expanded');
    header.setAttribute('aria-expanded', isExpanded);
  };

  header.addEventListener('click', toggle);

  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  return collapsible;
}

// ===== Markdown Rendering =====

/**
 * Render error message consistently
 */
function renderError(target, message) {
  target.innerHTML = `<p class="text-muted">Error loading content: ${message}</p>`;
}

/**
 * Load and render a Markdown file
 * Requires marked.js to be loaded
 */
async function renderMarkdown(path, targetElementId) {
  const target = document.getElementById(targetElementId);

  if (!target) {
    console.error(`Target element #${targetElementId} not found`);
    return;
  }

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const markdown = await response.text();

    if (typeof marked === 'undefined') {
      console.warn('marked.js not loaded; rendering raw Markdown');
      target.innerHTML = `<pre>${markdown}</pre>`;
      return;
    }

    target.innerHTML = marked.parse(markdown);

    if (typeof hljs !== 'undefined') {
      target.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
      });
    }
  } catch (error) {
    console.error('Markdown render error:', error);
    renderError(target, error.message);
  }
}

// ===== JSON Rendering =====

/**
 * Load and render a JSON file using json-formatter-js
 */
async function renderJSON(path, targetElementId, openDepth = 2) {
  const target = document.getElementById(targetElementId);

  if (!target) {
    console.error(`Target element #${targetElementId} not found`);
    return;
  }

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (typeof JSONFormatter === 'undefined') {
      console.warn('json-formatter-js not loaded; rendering raw JSON');
      target.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      return;
    }

    const formatter = new JSONFormatter(data, openDepth, {
      hoverPreviewEnabled: true,
      hoverPreviewArrayCount: 5,
      hoverPreviewFieldCount: 3
    });

    target.innerHTML = '';
    target.appendChild(formatter.render());
  } catch (error) {
    console.error('JSON render error:', error);
    renderError(target, error.message);
  }
}

// ===== File Metadata =====

/**
 * Create file metadata display block
 */
function createFileMeta(meta) {
  const trustClass = `trust-${meta.trust}`;
  const trustLabel =
    meta.trust.charAt(0).toUpperCase() + meta.trust.slice(1);

  const items = [
    { label: 'File Path', value: meta.path },
    {
      label: 'Trust Level',
      value: `<span class="trust-badge ${trustClass}">${trustLabel}</span>`
    }
  ];

  if (meta.version) {
    items.push({ label: 'Version', value: meta.version });
  }

  if (meta.updated) {
    items.push({ label: 'Updated', value: meta.updated });
  }

  return `
    <div class="file-meta">
      <div class="file-meta-grid">
        ${items
          .map(
            item => `
          <div class="file-meta-item">
            <div class="file-meta-label">${item.label}</div>
            <div class="file-meta-value">${item.value}</div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

// ===== Utility Functions =====

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getFileExtension(path) {
  return path.split('.').pop().toLowerCase();
}

function isJSONFile(path) {
  return getFileExtension(path) === 'json';
}

function isMarkdownFile(path) {
  const ext = getFileExtension(path);
  return ext === 'md' || ext === 'markdown';
}

// ===== Initialization =====

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initCollapsibles();
});

// ===== Public API =====

window.WritingSystem = {
  renderMarkdown,
  renderJSON,
  createFileMeta,
  createCollapsible,
  setActiveNav,
  formatDate,
  isJSONFile,
  isMarkdownFile
};
