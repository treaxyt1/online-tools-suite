/**
 * OnlineToolFree - Core Application
 * Version 2.0 - Premium Design System
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
            this.toggle.addEventListener('click', () => this.toggleTheme());
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
// Responsive Manager
// ========================================
const ResponsiveManager = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        // Mobile menu events
        document.addEventListener('click', (e) => {
            const menuBtn = e.target.closest('.mobile-menu-btn');
            const closeBtn = e.target.closest('.mobile-menu-close');
            const overlay = e.target.closest('.mobile-menu-overlay');
            const sidebarToggle = e.target.closest('.sidebar-toggle');

            if (menuBtn) {
                this.openMobileMenu();
            } else if (closeBtn || overlay) {
                this.closeMobileMenu();
            } else if (sidebarToggle) {
                this.toggleSidebar();
            }
        });

        // Close menu on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
    },

    openMobileMenu() {
        const menu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');

        if (menu) menu.classList.add('open');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeMobileMenu() {
        const menu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');

        if (menu) menu.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    },

    toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.mobile-menu-overlay');

        if (sidebar) {
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        }
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
        console.log('[Analytics]', event, data);
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
    ResponsiveManager.init();
    SmoothScroll.init();
    Analytics.pageView();
});

// ========================================
// Export to Window
// ========================================
window.ThemeManager = ThemeManager;
window.ResponsiveManager = ResponsiveManager;
window.SmoothScroll = SmoothScroll;
window.FormHelpers = FormHelpers;
window.Analytics = Analytics;
