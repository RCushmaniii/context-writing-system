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

// ===== Dropdown Navigation =====

/**
 * Initialize dropdown navigation menus (mouse + keyboard accessible)
 */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!trigger || !menu) return;

    const menuItems = menu.querySelectorAll('a');
    let isOpen = false;

    const open = () => {
      isOpen = true;
      dropdown.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      isOpen = false;
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    };

    const toggle = () => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    };

    // Click handler
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      toggle();
    });

    // Hover handlers
    dropdown.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseleave', close);

    // Keyboard navigation
    trigger.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          toggle();
          if (isOpen && menuItems.length > 0) {
            menuItems[0].focus();
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) open();
          if (menuItems.length > 0) {
            menuItems[0].focus();
          }
          break;
        case 'Escape':
          close();
          trigger.focus();
          break;
      }
    });

    // Menu item keyboard navigation
    menuItems.forEach((item, index) => {
      item.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            if (index < menuItems.length - 1) {
              menuItems[index + 1].focus();
            }
            break;
          case 'ArrowUp':
            e.preventDefault();
            if (index > 0) {
              menuItems[index - 1].focus();
            } else {
              trigger.focus();
            }
            break;
          case 'Escape':
            close();
            trigger.focus();
            break;
          case 'Tab':
            // Allow natural tab behavior but close dropdown
            close();
            break;
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        close();
      }
    });
  });
}

// ===== Mobile Menu =====

/**
 * Initialize mobile slide-out menu
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!toggle || !menu || !overlay) return;

  const open = () => {
    menu.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    menu.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', open);
  overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      close();
    }
  });

  // Close when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });
}

// ===== Initialization =====

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initCollapsibles();
  initDropdowns();
  initMobileMenu();
});

// ===== Public API =====

window.WritingSystem = {
  renderMarkdown,
  renderJSON,
  createFileMeta,
  createCollapsible,
  setActiveNav,
  initDropdowns,
  initMobileMenu,
  formatDate,
  isJSONFile,
  isMarkdownFile
};
