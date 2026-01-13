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
// Sidebar Manager - NO BLINKING FIX
// ========================================
const SidebarManager = {
    sidebar: null,
    overlay: null,
    isOpen: false,
    isInitialized: false,

    init() {
        if (this.isInitialized) return;

        this.sidebar = document.querySelector('.sidebar, .layout-sidebar');

        this.bindEvents();
        this.isInitialized = true;
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

            // Close when clicking overlay (only if sidebar is open)
            if (this.isOpen && target.classList.contains('mobile-menu-overlay')) {
                e.preventDefault();
                this.close();
                return;
            }
        }, { passive: false, capture: true });

        // Touch events
        document.addEventListener('touchend', (e) => {
            const target = e.target;

            if (target.closest('.sidebar-toggle')) {
                e.preventDefault();
                this.toggle();
                return;
            }

            if (this.isOpen && target.classList.contains('mobile-menu-overlay')) {
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
        this.sidebar = document.querySelector('.sidebar, .layout-sidebar');
        let overlay = document.querySelector('.mobile-menu-overlay');

        // Create overlay if it doesn't exist
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);
        }

        if (this.sidebar) {
            this.sidebar.classList.add('open');
        }
        if (overlay) {
            overlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    },

    close() {
        this.sidebar = document.querySelector('.sidebar, .layout-sidebar');
        const overlay = document.querySelector('.mobile-menu-overlay');

        if (this.sidebar) {
            this.sidebar.classList.remove('open');
        }
        if (overlay) {
            overlay.classList.remove('active');
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
// Global Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core modules
    ThemeManager.init();
    MobileNavManager.init();
    SidebarManager.init();
    SmoothScroll.init();
    Analytics.pageView();

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
