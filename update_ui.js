const fs = require('fs');
const path = 'js/ui.js';

let content = fs.readFileSync(path, 'utf8');

// Find the last closing brace and semicolon of the Components object
const searchString = '};';
const lastIndex = content.lastIndexOf(searchString);

if (lastIndex !== -1) {
    // We want the SECOND to last '};' if the last one is for the entire object
    // Looking at the grep, the last '};' is at line 797.

    const method = `
    // Render Cookie Consent
    renderCookieConsent() {
        if (localStorage.getItem('cookie-consent')) return;

        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.id = 'cookie-consent';
        
        banner.innerHTML = \`
            <div class="cookie-content">
                <span class="cookie-title">Cookie Settings</span>
                <p class="cookie-text">
                    We use cookies to enhance your experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                </p>
            </div>
            <div class="cookie-actions">
                <a href="/privacy.html" class="btn btn-ghost btn-sm">Privacy Policy</a>
                <button id="cookie-accept" class="btn btn-primary btn-sm">Accept All</button>
            </div>
        \`;

        document.body.appendChild(banner);
        
        // Trigger animation
        setTimeout(() => banner.classList.add('show'), 100);

        // Bind events
        const acceptBtn = document.getElementById('cookie-accept');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookie-consent', 'true');
                banner.classList.remove('show');
                setTimeout(() => banner.remove(), 600);
            });
        }
    }
};`;

    // Replace the last }; with our new method + };
    // But be careful, there are multiple }; in the file.
    // Let's use a more specific target if possible.

    if (content.includes('renderShareWidget')) {
        const parts = content.split('renderShareWidget');
        const lastPart = parts[parts.length - 1];
        const closingIndex = lastPart.indexOf('};');

        if (closingIndex !== -1) {
            const beforeClosing = content.substring(0, content.lastIndexOf(lastPart) + closingIndex);
            const afterClosing = content.substring(content.lastIndexOf(lastPart) + closingIndex + 2);

            content = beforeClosing + method + afterClosing;
            fs.writeFileSync(path, content, 'utf8');
            console.log('Successfully updated js/ui.js');
        } else {
            console.error('Could not find closing brace for renderShareWidget');
        }
    } else {
        console.error('Could not find renderShareWidget');
    }
} else {
    console.error('Could not find search string');
}
