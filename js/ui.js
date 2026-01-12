/**
 * OnlineToolFree - Premium UI Components
 * Version 2.1 - Modern SaaS Design with Dynamic Indexing
 */

// ========================================
// Icon Library (Lucide-style SVGs)
// ========================================
const Icons = {
    home: `<svg class="icon" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    search: `<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    menu: `<svg class="icon" viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
    close: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    sun: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    copy: `<svg class="icon" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    download: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    upload: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    check: `<svg class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    chevronRight: `<svg class="icon" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>`,
    chevronDown: `<svg class="icon" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>`,
    chevronLeft: `<svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>`,
    arrowRight: `<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    settings: `<svg class="icon" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    star: `<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    heart: `<svg class="icon" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    folder: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,
    file: `<svg class="icon" viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    image: `<svg class="icon" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    code: `<svg class="icon" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    terminal: `<svg class="icon" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    hash: `<svg class="icon" viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    link: `<svg class="icon" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    type: `<svg class="icon" viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    zap: `<svg class="icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
    clock: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    globe: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    twitter: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    github: `<svg class="icon" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    info: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    alertCircle: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    checkCircle: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    layers: `<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    sparkles: `<svg class="icon" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    wand: `<svg class="icon" viewBox="0 0 24 24"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h0"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></svg>`,
    grid: `<svg class="icon" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    history: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>`,
    externalLink: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    palette: `<svg class="icon" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.551-2.5 5.551-5.551C21.566 6.5 17.276 2 12 2z"/></svg>`
};

// ========================================
// Toast Notifications
// ========================================
const Toast = {
    container: null,
    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    },
    show(message, type = 'success', duration = 4000) {
        this.init();
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const iconMap = {
            success: Icons.checkCircle,
            error: Icons.alertCircle,
            warning: Icons.alertCircle,
            info: Icons.info
        };
        toast.innerHTML = `
            <span class="toast-icon">${iconMap[type] || iconMap.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">${Icons.close}</button>
        `;
        this.container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },
    success(message) { this.show(message, 'success'); },
    error(message) { this.show(message, 'error'); },
    warning(message) { this.show(message, 'warning'); },
    info(message) { this.show(message, 'info'); }
};

// ========================================
// Clipboard Helper
// ========================================
const Clipboard = {
    async copy(text, showToast = true) {
        try {
            await navigator.clipboard.writeText(text);
            if (showToast) Toast.success('Copied to clipboard!');
            return true;
        } catch (err) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.cssText = 'position:fixed;opacity:0;';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                if (showToast) Toast.success('Copied to clipboard!');
                return true;
            } catch (e) {
                if (showToast) Toast.error('Failed to copy');
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
};

// ========================================
// File Handler
// ========================================
const FileHandler = {
    read(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    },
    readAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },
    download(content, filename, mimeType = 'text/plain') {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        Toast.success(`Downloaded ${filename}`);
    }
};

// ========================================
// Loading States
// ========================================
const Loading = {
    show(element) {
        element.classList.add('loading');
        element.disabled = true;
        element.dataset.originalHtml = element.innerHTML;
        element.innerHTML = `<span class="spinner"></span> Processing...`;
    },
    hide(element) {
        element.classList.remove('loading');
        element.disabled = false;
        element.innerHTML = element.dataset.originalHtml || 'Done';
    }
};

// ========================================
// Debounce & Throttle
// ========================================
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// Premium Components
// ========================================
const Components = {
    // Render Header
    renderHeader() {
        const headers = document.querySelectorAll('.header');
        if (!headers.length) return;
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';
        const html = `
            <div class="container header-inner">
                <a href="${prefix}index.html" class="logo">
                    <div class="logo-icon">${Icons.layers}</div>
                    <span class="logo-text">OnlineTool<span>Free</span></span>
                </a>
                <nav class="nav-menu">
                    <a href="${prefix}index.html" class="nav-link">${Icons.home} Home</a>
                    <a href="${prefix}index.html#all-tools" class="nav-link">${Icons.grid} All Tools</a>
                    <a href="${prefix}about.html" class="nav-link">${Icons.info} About</a>
                    <a href="${prefix}contact.html" class="nav-link">${Icons.globe} Contact</a>
                </nav>
                <div class="header-actions">
                    <button class="btn btn-ghost btn-icon theme-toggle" aria-label="Toggle theme">
                        ${Icons.moon}
                    </button>
                    <button class="mobile-menu-btn" aria-label="Open menu">
                        ${Icons.menu}
                    </button>
                </div>
            </div>
        `;
        headers.forEach(h => h.innerHTML = html);
    },

    // Render Mobile Menu
    renderMobileMenu() {
        if (document.querySelector('.mobile-menu')) return;
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';
        const menu = document.createElement('nav');
        menu.className = 'mobile-menu';
        menu.innerHTML = `
            <button class="mobile-menu-close">${Icons.close}</button>
            <ul class="mobile-nav-list">
                <li><a href="${prefix}index.html" class="mobile-nav-link">${Icons.home} Home</a></li>
                <li><a href="${prefix}index.html#all-tools" class="mobile-nav-link">${Icons.grid} All Tools</a></li>
                <li><a href="${prefix}about.html" class="mobile-nav-link">${Icons.info} About</a></li>
                <li><a href="${prefix}contact.html" class="mobile-nav-link">${Icons.globe} Contact</a></li>
                <li><a href="${prefix}privacy.html" class="mobile-nav-link">${Icons.shield} Privacy</a></li>
                <li><a href="${prefix}terms.html" class="mobile-nav-link">${Icons.file} Terms</a></li>
            </ul>
        `;
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(menu);
        document.body.appendChild(overlay);
    },

    // Category Mappings and Icons
    categoryPaths: {
        'URL & Encoding': 'url',
        'Developer': 'code',
        'Converters': 'converters',
        'Color Tools': 'color',
        'Text Tools': 'text',
        'Hash & Encryption': 'hash',
        'Generators': 'random',
        'Number Converters': 'number',
        'Date & Time': 'datetime',
        'Network Tools': 'network',
        'SEO Tools': 'seo',
        'Document Tools': 'document',
        'PNG Tools': 'png',
        'JPG Tools': 'jpg',
        'AI Tools': 'ai',
        'Retro Emulators': 'emulators',
        'Productivity': 'productivity',
        'Finance': 'finance',
        'Writing': 'writing',
        'Calculator Tools': 'calculator',
        'Scanner Tools': 'scanner',
        'Social': 'social',
        'Education': 'education',
        'Health': 'health',
        'Validators': 'validator',
        'Audio Tools': 'audio',
        'Video Tools': 'video',
        'Image Tools': 'image',
        'PDF Tools': 'pdf',
        'Time Tools': 'time',
        'Translator Tools': 'translator'
    },

    categoryIcons: {
        'Text Tools': Icons.type,
        'Image Tools': Icons.image,
        'Converters': Icons.zap,
        'Encoding': Icons.hash,
        'Developer': Icons.code,
        'Color Tools': Icons.palette,
        'AI Tools': Icons.sparkles,
        'URL & Encoding': Icons.link,
        'Hash & Checksum': Icons.shield,
        'Hash & Encryption': Icons.shield,
        'Generators': Icons.wand,
        'Random Generators': Icons.wand,
        'Number Converters': Icons.zap,
        'Date & Time': Icons.clock,
        'Network Tools': Icons.globe,
        'SEO Tools': Icons.search,
        'Document Tools': Icons.file,
        'PNG Tools': Icons.image,
        'JPG Tools': Icons.image,
        'Retro Emulators': Icons.zap,
        'Productivity': Icons.clock,
        'Finance': Icons.star,
        'Writing': Icons.edit,
        'Calculator Tools': Icons.layers,
        'Scanner Tools': Icons.search,
        'Social': Icons.twitter,
        'Education': Icons.layers,
        'Health': Icons.heart,
        'Validators': Icons.checkCircle,
        'Audio Tools': Icons.zap,
        'Video Tools': Icons.zap,
        'PDF Tools': Icons.file,
        'Time Tools': Icons.clock,
        'Translator Tools': Icons.globe
    },

    // Handle Sidebar Search
    handleSidebarSearch(query) {
        if (!query) {
            // Reset: Collapse all, show all
            document.querySelectorAll('.sidebar-tool-link').forEach(el => el.style.display = '');
            document.querySelectorAll('.sidebar-category').forEach(el => {
                el.style.display = '';
                el.classList.remove('expanded');
            });
            return;
        }

        const lowerQuery = query.toLowerCase();

        document.querySelectorAll('.sidebar-category').forEach(cat => {
            const tools = cat.querySelectorAll('.sidebar-tool-link');
            let hasVisibleTools = false;

            tools.forEach(tool => {
                const text = tool.textContent.toLowerCase();
                if (text.includes(lowerQuery)) {
                    tool.style.display = '';
                    hasVisibleTools = true;
                } else {
                    tool.style.display = 'none';
                }
            });

            if (hasVisibleTools) {
                cat.style.display = '';
                cat.classList.add('expanded');
            } else {
                cat.style.display = 'none';
                cat.classList.remove('expanded');
            }
        });
    },

    // Render Sidebar (for tool pages)
    renderSidebar(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const tools = window.TOOLS_REGISTRY || [];
        const categories = [...new Set(tools.map(t => t.category))];
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';
        const currentPath = window.location.pathname;

        let html = `
            <div class="sidebar-header">
                <a href="${prefix}index.html" class="sidebar-logo">
                    ${Icons.layers}
                    <span>OnlineToolFree</span>
                </a>
            </div>
            <div class="sidebar-search" style="padding: 0 var(--space-4); margin-bottom: var(--space-2);">
                <div style="position: relative;">
                    <input type="text" 
                           placeholder="Search tools..." 
                           oninput="Components.handleSidebarSearch(this.value)"
                           style="width: 100%; padding: 8px 12px 8px 32px; border-radius: 6px; border: 1px solid var(--border-light); background: var(--bg-tertiary); font-size: 13px;">
                    <svg class="icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none;">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                </div>
            </div>
            <div class="sidebar-section">
                <a href="${prefix}index.html" class="sidebar-link">
                    ${Icons.home}
                    <span>Dashboard</span>
                </a>
                <a href="${prefix}index.html#all-tools" class="sidebar-link">
                    ${Icons.grid}
                    <span>All Tools</span>
                </a>
            </div>
            <div class="sidebar-divider"></div>
            <div class="sidebar-section">
                <div class="sidebar-title">All Tools</div>
        `;

        categories.sort().forEach(cat => {
            const catTools = tools.filter(t => t.category === cat);
            const icon = this.categoryIcons[cat] || Icons.folder;
            const catPathPart = this.categoryPaths[cat] || cat.split(' ')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-');
            const catIndexUrl = `${prefix}tools/${catPathPart}/index.html`;

            html += `
                <div class="sidebar-category">
                    <div class="sidebar-category-header" onclick="this.parentElement.classList.toggle('expanded')">
                        ${icon}
                        <span>${cat}</span>
                        <span class="sidebar-badge">${catTools.length}</span>
                        ${Icons.chevronRight}
                    </div>
                    <div class="sidebar-category-items">
                        <a href="${catIndexUrl}" class="sidebar-tool-link" style="color: var(--primary-600); font-weight: 600; border-bottom: 1px dashed var(--border-light); margin-bottom: 4px;">
                            ${cat} Index &rarr;
                        </a>
            `;
            catTools.forEach(tool => {
                const isActive = currentPath.includes(tool.url);
                html += `
                    <a href="${prefix}${tool.url}" class="sidebar-tool-link ${isActive ? 'active' : ''}">
                        ${tool.name}
                    </a>
                `;
            });
            html += `</div></div>`;
        });

        html += `
            </div>
            <div class="sidebar-divider"></div>
            <div class="sidebar-section">
                <a href="${prefix}about.html" class="sidebar-link">
                    ${Icons.info}
                    <span>About</span>
                </a>
                <a href="${prefix}contact.html" class="sidebar-link">
                    ${Icons.globe}
                    <span>Contact</span>
                </a>
            </div>
        `;
        container.innerHTML = html;
    },

    // Render Footer
    renderFooter() {
        const footers = document.querySelectorAll('.footer');
        if (!footers.length) return;
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';
        const html = `
            <div class="container">
                <div class="footer-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-8);">
                    <div class="footer-brand">
                        <a href="${prefix}index.html" class="logo">
                            <div class="logo-icon">${Icons.layers}</div>
                            <span class="logo-text">OnlineTool<span>Free</span></span>
                        </a>
                        <p>The web's most complete collection of free online tools. No signup, no installation, just instant utilities for developers and creators.</p>
                        <div class="footer-social">
                            <a href="#" aria-label="Twitter">${Icons.twitter}</a>
                            <a href="#" aria-label="GitHub">${Icons.github}</a>
                        </div>
                    </div>
                    
                    <div class="footer-column">
                        <h4>Popular Text Tools</h4>
                        <ul class="footer-links">
                            <li><a href="${prefix}tools/text/word-counter.html">Word Counter</a></li>
                            <li><a href="${prefix}tools/text/case-converter.html">Case Converter</a></li>
                            <li><a href="${prefix}tools/text/remove-duplicate-lines.html">Remove Duplicates</a></li>
                            <li><a href="${prefix}tools/text/lorem-ipsum.html">Lorem Ipsum Gen</a></li>
                            <li><a href="${prefix}tools/text/diff.html">Text Diff Checker</a></li>
                            <li><a href="${prefix}tools/text/google-fonts.html">Font Pairings</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Developer Utils</h4>
                        <ul class="footer-links">
                            <li><a href="${prefix}tools/json/formatter.html">JSON Formatter</a></li>
                            <li><a href="${prefix}tools/hash/md5.html">MD5 Generator</a></li>
                            <li><a href="${prefix}tools/url/encoder.html">URL Encoder/Decoder</a></li>
                            <li><a href="${prefix}tools/css/box-shadow.html">CSS Box Shadow</a></li>
                            <li><a href="${prefix}tools/converters/hex-to-rgb.html">Hex to RGB</a></li>
                            <li><a href="${prefix}tools/generator/uuid.html">UUID Generator</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Image & Media</h4>
                        <ul class="footer-links">
                            <li><a href="${prefix}tools/image/compression.html">Compress Images</a></li>
                            <li><a href="${prefix}tools/converters/png-to-jpg.html">PNG to JPG</a></li>
                            <li><a href="${prefix}tools/converters/jpg-to-png.html">JPG to PNG</a></li>
                            <li><a href="${prefix}tools/converters/webp-to-png.html">WebP to PNG</a></li>
                            <li><a href="${prefix}tools/video/video-to-gif.html">Video to GIF</a></li>
                            <li><a href="${prefix}tools/generator/qr-code.html">QR Code Gen</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>Site & Resources</h4>
                        <ul class="footer-links">
                            <li><a href="${prefix}sitemap.html"><strong>Full Sitemap</strong></a></li>
                            <li><a href="${prefix}about.html">About Us</a></li>
                            <li><a href="${prefix}contact.html">Contact Support</a></li>
                            <li><a href="${prefix}privacy.html">Privacy Policy</a></li>
                            <li><a href="${prefix}terms.html">Terms of Service</a></li>
                            <li><a href="https://stackoverflow.com/" target="_blank" rel="noopener">StackOverflow</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noopener">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom" style="margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--border-light);">
                    <div class="footer-tags" style="display: flex; flex-wrap: wrap; gap: var(--space-4); justify-content: center; font-size: var(--text-sm); color: var(--text-muted);">
                        <span>Popular Searches:</span>
                        <a href="${prefix}tools/pdf/merge.html" style="color: inherit;">Merge PDF</a>
                        <a href="${prefix}tools/text/character-counter.html" style="color: inherit;">Char Counter</a>
                        <a href="${prefix}tools/converters/binary-to-text.html" style="color: inherit;">Binary Code</a>
                        <a href="${prefix}tools/color/picker.html" style="color: inherit;">Color Picker</a>
                        <a href="${prefix}tools/network/my-ip.html" style="color: inherit;">My IP</a>
                        <a href="${prefix}tools/datetime/timestamp.html" style="color: inherit;">Unix Timestamp</a>
                    </div>
                    <p class="footer-copyright" style="margin-top: var(--space-4);">© 2026 OnlineToolFree. All rights reserved. Built for performance and privacy.</p>
                </div>
            </div>
        `;
        footers.forEach(f => f.innerHTML = html);
    },

    // Render All Tools Grid (for homepage)
    renderAllToolsGrid(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const tools = window.TOOLS_REGISTRY || [];
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';
        const html = tools.map(tool => {
            const icon = this.categoryIcons[tool.category] || Icons.zap;
            return `
                <a href="${prefix}${tool.url}" class="tool-card">
                    <div class="tool-card-icon">${icon}</div>
                    <h3 class="tool-card-title">${tool.name}</h3>
                    <p class="tool-card-description">${tool.description || 'Free online tool'}</p>
                    <span class="tool-card-action">
                        Open Tool ${Icons.arrowRight}
                    </span>
                </a>
            `;
        }).join('');
        container.innerHTML = `<div class="tools-grid">${html}</div>`;
    },

    // Render Breadcrumb Navigation with Schema
    renderBreadcrumb(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const schemaItems = items.map((item, i) => `{
            "@type": "ListItem",
            "position": ${i + 1},
            "name": "${item.name}"${item.url ? `, "item": "https://onlinetoolfree.com${item.url}"` : ''}
        }`).join(',\n            ');

        const html = `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <ol class="breadcrumb-list">
                    ${items.map((item, i) => `
                        <li class="breadcrumb-item">
                            ${item.url ? `<a href="${item.url}">${item.name}</a>` : `<span>${item.name}</span>`}
                            ${i < items.length - 1 ? `<span class="breadcrumb-sep">${Icons.chevronRight}</span>` : ''}
                        </li>
                    `).join('')}
                </ol>
            </nav>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [${schemaItems}]
            }
            </script>
        `;
        container.innerHTML = html;
    },

    // Render Related Tools Section
    renderRelatedTools(containerId, currentToolId, count = 5) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const tools = window.TOOLS_REGISTRY || [];
        const currentTool = tools.find(t => t.id === currentToolId);
        if (!currentTool) return;
        const relatedTools = tools
            .filter(t => t.category === currentTool.category && t.id !== currentToolId)
            .slice(0, count);
        const prefix = window.location.pathname.includes('/tools/') ? '../../' : '';

        const html = `
            <section class="related-tools-section">
                <h2 class="related-tools-title">Related Tools</h2>
                <p class="related-tools-description">Explore more ${currentTool.category.toLowerCase()} that might help you:</p>
                <div class="related-tools-grid">
                    ${relatedTools.map(tool => {
            const icon = this.categoryIcons[tool.category] || Icons.zap;
            return `
                            <a href="${prefix}${tool.url}" class="related-tool-card">
                                <div class="related-tool-icon">${icon}</div>
                                <div class="related-tool-content">
                                    <h3 class="related-tool-name">${tool.name}</h3>
                                    <p class="related-tool-desc">${tool.description || 'Free online tool'}</p>
                                </div>
                                ${Icons.arrowRight}
                            </a>
                        `;
        }).join('')}
                </div>
            </section>
        `;
        container.innerHTML = html;
        this.renderShareWidget(); // Auto-render share buttons if container exists (created by renderShareWidget logic)
    },

    // Render Tool Page Schema
    renderToolSchema(toolName, category, description) {
        const slug = toolName.toLowerCase().replace(/\s+/g, '-');
        const schema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": toolName,
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "description": description,
            "url": `https://onlinetoolfree.com/tools/${category}/${slug}.html`
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    },

    // Render Category Index Page Content
    renderCategoryIndex(containerId, categoryName) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const tools = (window.TOOLS_REGISTRY || []).filter(t => t.category === categoryName);
        const prefix = '../../';
        const icon = this.categoryIcons[categoryName] || Icons.folder;
        let html = `
            <div class="category-hero animate-fade-in">
                <div class="category-icon-large">${icon}</div>
                <h1 class="category-title">${categoryName}</h1>
                <p class="category-subtitle">Fast, secure, and privacy-focused free online tools for ${categoryName.toLowerCase()}.</p>
            </div>
            <div class="tools-grid animate-staggered">
                ${tools.map((tool, index) => `
                    <a href="${prefix}${tool.url}" class="tool-card animate-fade-in" style="animation-delay: ${index * 50}ms">
                        <div class="tool-card-icon">${tool.icon ? (Icons[tool.icon] || Icons.zap) : (this.categoryIcons[tool.category] || Icons.zap)}</div>
                        <h3 class="tool-card-title">${tool.name}</h3>
                        <p class="tool-card-description">${tool.description || 'Professional online tool'}</p>
                        <span class="tool-card-action">
                            Open Tool ${Icons.arrowRight}
                        </span>
                    </a>
                `).join('')}
            </div>
        `;
        container.innerHTML = html;
        setTimeout(() => {
            document.querySelectorAll('.animate-fade-in').forEach((el) => {
                el.classList.add('visible');
            });
        }, 100);
    },

    // Render FAQ Schema
    renderFAQSchema(faqs) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    },

    // Render Social Share Widget (Encourages Backlinks)
    renderShareWidget(containerId) {
        // Find container or create it before footer if missing
        let container = document.getElementById(containerId);
        if (!container && document.querySelector('.tool-page')) {
            container = document.createElement('div');
            container.id = 'share-widget-container';
            const page = document.querySelector('.tool-page');
            page.appendChild(container); // Append at bottom of tool page
        }
        if (!container) return; // Skip if no place to render

        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);

        container.innerHTML = `
            <div class="share-widget" style="margin-top: var(--space-8); padding: var(--space-6); background: var(--bg-secondary); border-radius: var(--radius-lg); text-align: center;">
                <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-4);">Share this tool</h3>
                <div style="display: flex; justify-content: center; gap: var(--space-3); flex-wrap: wrap;">
                    <a href="https://twitter.com/intent/tweet?url=${url}&text=${text}" target="_blank" rel="noopener" class="btn btn-sm" style="background:#1DA1F2; color:white;">
                        ${Icons.twitter} Twitter
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" class="btn btn-sm" style="background:#4267B2; color:white;">
                         Facebook
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener" class="btn btn-sm" style="background:#0077b5; color:white;">
                         LinkedIn
                    </a>
                    <a href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener" class="btn btn-sm" style="background:#25D366; color:white;">
                         WhatsApp
                    </a>
                    <button onclick="Clipboard.copy(window.location.href)" class="btn btn-sm btn-ghost">
                        ${Icons.link} Copy Link
                    </button>
                </div>
            </div>
        `;
    }
};

// ========================================
// Export Modules
// ========================================
window.Icons = Icons;
window.Toast = Toast;
window.Clipboard = Clipboard;
window.FileHandler = FileHandler;
window.Loading = Loading;
window.Components = Components;
window.debounce = debounce;
window.throttle = throttle;
