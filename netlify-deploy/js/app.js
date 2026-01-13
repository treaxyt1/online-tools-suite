/**
 * OnlineToolFree - Core Application
 * Version 3.0 - Fixed Mobile Menu & Sidebar Toggle
 */

// ========================================
// Theme Manager
// ========================================
const ThemeManager = {
    init() {
        this.toggle = document.querySelector('.theme-toggle');
        this.applyTheme();
        this.bindEvents();
    },

    getStoredTheme() {
        return localStorage.getItem('theme');
    },

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    applyTheme() {
        const stored = this.getStoredTheme();
        const theme = stored || 'light'; // Default to light theme
        document.documentElement.setAttribute('data-theme', theme);
        this.updateIcon(theme);
    },

    updateIcon(theme) {
        if (!this.toggle) return;

        const moonIcon = `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
        const sunIcon = `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

        this.toggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    },

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        this.updateIcon(next);
    },

    bindEvents() {
        if (this.toggle) {
            this.toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleTheme();
            });
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (!this.getStoredTheme()) {
                this.applyTheme();
            }
        });
    }
};

// ========================================
// Mobile Navigation Manager - CRITICAL FIX
// ========================================
const MobileNavManager = {
    menu: null,
    overlay: null,
    isOpen: false,
    isInitialized: false,

    init() {
        if (this.isInitialized) return;

        this.menu = document.querySelector('.mobile-menu');
        this.overlay = document.querySelector('.mobile-menu-overlay');

        this.bindEvents();
        this.isInitialized = true;
    },

    bindEvents() {
        // Use event delegation on document for reliability
        document.addEventListener('click', (e) => {
            const target = e.target;

            // Mobile menu button click
            if (target.closest('.mobile-menu-btn')) {
                e.preventDefault();
                e.stopPropagation();
                this.open();
                return;
            }

            // Close button click
            if (target.closest('.mobile-menu-close')) {
                e.preventDefault();
                e.stopPropagation();
                this.close();
                return;
            }

            // Overlay click
            if (target.classList.contains('mobile-menu-overlay')) {
                e.preventDefault();
                this.close();
                return;
            }
        }, { passive: false, capture: true });

        // Touch events for mobile
        document.addEventListener('touchend', (e) => {
            const target = e.target;

            if (target.closest('.mobile-menu-btn')) {
                e.preventDefault();
                this.open();
                return;
            }

            if (target.closest('.mobile-menu-close') || target.classList.contains('mobile-menu-overlay')) {
                e.preventDefault();
                this.close();
                return;
            }
        }, { passive: false });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isOpen) {
                this.close();
            }
        });
    },

    open() {
        // Ensure menu exists in DOM
        if (!document.querySelector('.mobile-menu')) {
            if (window.Components && window.Components.renderMobileMenu) {
                window.Components.renderMobileMenu();
            }
        }

        this.menu = document.querySelector('.mobile-menu');
        this.overlay = document.querySelector('.mobile-menu-overlay');

        if (this.menu) {
            this.menu.classList.add('open');
        }
        if (this.overlay) {
            this.overlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    },

    close() {
        this.menu = document.querySelector('.mobile-menu');
        this.overlay = document.querySelector('.mobile-menu-overlay');

        if (this.menu) {
            this.menu.classList.remove('open');
        }
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
        document.body.style.overflow = '';
        this.isOpen = false;
    }
};

// ========================================
// Sidebar Manager - CONTENT-FIRST UX
// Sidebar hidden by default on mobile, opens via toggle
// ========================================
const SidebarManager = {
    sidebar: null,
    overlay: null,
    isOpen: false,
    isInitialized: false,

    init() {
        if (this.isInitialized) return;

        this.sidebar = document.querySelector('.sidebar, .layout-sidebar, .tool-sidebar');

        // Create sidebar overlay if it doesn't exist
        this.ensureOverlay();

        this.bindEvents();
        this.isInitialized = true;
    },

    ensureOverlay() {
        if (!document.querySelector('.sidebar-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
        }
    },

    bindEvents() {
        // Use event delegation on document
        document.addEventListener('click', (e) => {
            const target = e.target;

            // Sidebar toggle button click
            if (target.closest('.sidebar-toggle')) {
                e.preventDefault();
                e.stopPropagation();
                this.toggle();
                return;
            }

            // Close when clicking sidebar overlay
            if (target.classList.contains('sidebar-overlay') && this.isOpen) {
                e.preventDefault();
                e.stopPropagation();
                this.close();
                return;
            }

            // Close when clicking mobile-menu-overlay (if sidebar is open)
            if (target.classList.contains('mobile-menu-overlay') && this.isOpen) {
                e.preventDefault();
                e.stopPropagation();
                this.close();
                return;
            }
        }, { passive: false, capture: true });

        // Touch events for mobile
        document.addEventListener('touchend', (e) => {
            const target = e.target;

            if (target.closest('.sidebar-toggle')) {
                e.preventDefault();
                this.toggle();
                return;
            }

            if ((target.classList.contains('sidebar-overlay') ||
                target.classList.contains('mobile-menu-overlay')) && this.isOpen) {
                e.preventDefault();
                this.close();
                return;
            }
        }, { passive: false });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Close on resize to desktop (sidebar visible by default there)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && this.isOpen) {
                this.close();
            }
        });
    },

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    },

    open() {
        this.sidebar = document.querySelector('.sidebar, .layout-sidebar, .tool-sidebar');

        // If sidebar exists but is empty, try to render it
        if (this.sidebar && this.sidebar.children.length === 0) {
            if (window.Components && window.Components.renderSidebar) {
                window.Components.renderSidebar(this.sidebar.id || 'tool-sidebar');
            }
        }

        this.ensureOverlay();
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        const mobileOverlay = document.querySelector('.mobile-menu-overlay');

        if (this.sidebar) {
            this.sidebar.classList.add('open');
        }
        if (sidebarOverlay) {
            sidebarOverlay.classList.add('active');
        }
        if (mobileOverlay) {
            mobileOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    },

    close() {
        this.sidebar = document.querySelector('.sidebar, .layout-sidebar, .tool-sidebar');
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        const mobileOverlay = document.querySelector('.mobile-menu-overlay');

        if (this.sidebar) {
            this.sidebar.classList.remove('open');
        }
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }
        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
        this.isOpen = false;
    }
};

// ========================================
// Legacy ResponsiveManager (for backward compatibility)
// ========================================
const ResponsiveManager = {
    init() {
        MobileNavManager.init();
        SidebarManager.init();
    },

    openMobileMenu() {
        MobileNavManager.open();
    },

    closeMobileMenu() {
        MobileNavManager.close();
    },

    toggleSidebar() {
        SidebarManager.toggle();
    }
};

// ========================================
// Smooth Scroll
// ========================================
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// ========================================
// Form Helpers
// ========================================
const FormHelpers = {
    getValue(id) {
        const el = document.getElementById(id);
        return el ? el.value : '';
    },

    setValue(id, value) {
        const el = document.getElementById(id);
        if (el) el.value = value;
    },

    clear(...ids) {
        ids.forEach(id => this.setValue(id, ''));
    },

    swap(id1, id2) {
        const val1 = this.getValue(id1);
        const val2 = this.getValue(id2);
        this.setValue(id1, val2);
        this.setValue(id2, val1);
    }
};

// ========================================
// Analytics (Placeholder)
// ========================================
const Analytics = {
    track(event, data = {}) {
        // Placeholder for analytics implementation
        if (window.gtag) {
            gtag('event', event, data);
        }
    },

    pageView() {
        this.track('page_view', {
            path: window.location.pathname,
            title: document.title
        });
    },

    toolUsage(toolName) {
        this.track('tool_usage', { tool: toolName });
    }
};

// ========================================
// Cookie Consent Manager
// ========================================
const CookieManager = {
    init() {
        if (localStorage.getItem('cookie-consent')) return;

        // Delay banner show for better UX
        setTimeout(() => this.render(), 2000);
    },

    render() {
        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.id = 'cookie-consent';

        banner.innerHTML = `
            <div class="cookie-content">
                <span class="cookie-title">Cookie Settings</span>
                <p class="cookie-text">
                    We use cookies to enhance your experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                </p>
            </div>
            <div class="cookie-actions">
                <a href="/privacy.html" class="btn btn-ghost btn-sm">Privacy Policy</a>
                <button id="cookie-reject" class="btn btn-secondary btn-sm">Reject All</button>
                <button id="cookie-accept" class="btn btn-primary btn-sm">Accept All</button>
            </div>
        `;

        document.body.appendChild(banner);

        // Trigger animation
        setTimeout(() => banner.classList.add('show'), 100);

        // Bind events
        const acceptBtn = document.getElementById('cookie-accept');
        const rejectBtn = document.getElementById('cookie-reject');

        const dismiss = (consent) => {
            localStorage.setItem('cookie-consent', consent);
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 600);
        };

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => dismiss('true'));
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => dismiss('false'));
        }
    }
};

// ========================================
// Global Layout Auto-Renderer
// Automatically detects markers and renders components
// ========================================
const LayoutManager = {
    init() {
        if (window.Components) {
            this.renderGlobal();
            this.renderContextual();
        }
    },

    renderGlobal() {
        if (document.querySelector('.header')) window.Components.renderHeader();
        if (document.querySelector('.footer')) window.Components.renderFooter();

        // Mobile menu overlay and menu
        window.Components.renderMobileMenu();
    },

    renderContextual() {
        const sidebar = document.querySelector('.tool-sidebar, #tool-sidebar');
        if (sidebar) window.Components.renderSidebar(sidebar.id || 'tool-sidebar');

        const dashboard = document.getElementById('search-results');
        if (dashboard) window.Components.renderCategoryToolsGrid('search-results');

        // Automatic Tool Page Components
        if (window.location.pathname.includes('/tools/')) {
            const pathParts = window.location.pathname.split('/');
            const category = pathParts[pathParts.length - 2];
            const fileName = pathParts[pathParts.length - 1].replace('.html', '');
            const toolName = document.title.split(' - ')[0];

            // Related Tools
            const related = document.getElementById('related-tools-container');
            if (related) window.Components.renderRelatedTools('related-tools-container', fileName);

            // Breadcrumbs
            const breadcrumbContainer = document.getElementById('breadcrumb-container');
            if (breadcrumbContainer) {
                const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
                window.Components.renderBreadcrumb('breadcrumb-container', [
                    { name: 'Home', url: '/index.html' },
                    { name: categoryLabel, url: `/tools/${category}/index.html` },
                    { name: toolName }
                ]);
            }

            // Schema
            const description = document.querySelector('meta[name="description"]')?.content || 'Free online tool';
            window.Components.renderToolSchema(toolName, category, description);
        }
    }
};


// ========================================
// Dashboard Search Manager
// ========================================
const SearchManager = {
    init() {
        this.input = document.getElementById('dashboard-search');
        if (!this.input) return;

        this.bindEvents();
    },

    bindEvents() {
        this.input.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            this.filterTools(query);
        }, 300));
    },

    filterTools(query) {
        const sections = document.querySelectorAll('.category-section');
        const cards = document.querySelectorAll('.category-tool-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const name = card.querySelector('.category-tool-name').textContent.toLowerCase();
            const shouldShow = name.includes(query);
            card.style.display = shouldShow ? 'flex' : 'none';
            if (shouldShow) visibleCount++;
        });

        // Hide empty categories
        sections.forEach(section => {
            const visibleInCat = Array.from(section.querySelectorAll('.category-tool-card')).some(c => c.style.display !== 'none');
            section.style.display = visibleInCat ? 'block' : 'none';
        });

        // Show "no results" if needed
        let noResults = document.getElementById('no-results-msg');
        if (visibleCount === 0 && query !== '') {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.id = 'no-results-msg';
                noResults.style.textAlign = 'center';
                noResults.style.padding = '4rem 2rem';
                noResults.innerHTML = `<h3>No tools found matching "${query}"</h3><p>Try searching for something else like "JSON", "PDF", or "Image".</p>`;
                document.getElementById('search-results').appendChild(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }
};


// ========================================
// Global Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Layout First (renders containers)
    LayoutManager.init();

    // Initialize core interaction modules
    ThemeManager.init();
    MobileNavManager.init();
    SidebarManager.init();
    SmoothScroll.init();
    Analytics.pageView();
    CookieManager.init();
    SearchManager.init();

    // Ensure overlay exists for mobile menu
    if (!document.querySelector('.mobile-menu-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
});


// ========================================
// Export to Window
// ========================================
window.ThemeManager = ThemeManager;
window.MobileNavManager = MobileNavManager;
window.SidebarManager = SidebarManager;
window.ResponsiveManager = ResponsiveManager;
window.SmoothScroll = SmoothScroll;
window.FormHelpers = FormHelpers;
window.Analytics = Analytics;
window.CookieManager = CookieManager;
window.LayoutManager = LayoutManager;
window.SearchManager = SearchManager;

