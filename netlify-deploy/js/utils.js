/**
 * onlinetoolfree.com - Utility Functions
 * Text, number, date, and data manipulation utilities
 */

// ========================================
// Text Utilities
// ========================================
const TextUtils = {
    // Case conversions
    toLower: (str) => str.toLowerCase(),
    toUpper: (str) => str.toUpperCase(),
    toTitle: (str) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    toSentence: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    toRandom: (str) => str.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join(''),
    invertCase: (str) => str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''),

    // Line operations
    countLines: (str) => str.split('\n').length,
    countWords: (str) => str.trim() ? str.trim().split(/\s+/).length : 0,
    countChars: (str) => str.length,
    countCharsNoSpaces: (str) => str.replace(/\s/g, '').length,

    removeDuplicateLines: (str) => [...new Set(str.split('\n'))].join('\n'),
    removeEmptyLines: (str) => str.split('\n').filter(line => line.trim()).join('\n'),
    sortLines: (str) => str.split('\n').sort().join('\n'),
    sortLinesDesc: (str) => str.split('\n').sort().reverse().join('\n'),
    reverseLines: (str) => str.split('\n').reverse().join('\n'),
    shuffleLines: (str) => {
        const lines = str.split('\n');
        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        return lines.join('\n');
    },

    // String operations
    reverse: (str) => str.split('').reverse().join(''),
    trim: (str) => str.trim(),
    trimLines: (str) => str.split('\n').map(line => line.trim()).join('\n'),
    removeExtraSpaces: (str) => str.replace(/\s+/g, ' ').trim(),
    removeAllSpaces: (str) => str.replace(/\s/g, ''),
    removePunctuation: (str) => str.replace(/[^\w\s]/g, ''),
    removeAccents: (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),

    // Extract
    extractEmails: (str) => str.match(/[\w.-]+@[\w.-]+\.\w+/g) || [],
    extractUrls: (str) => str.match(/https?:\/\/[^\s]+/g) || [],
    extractNumbers: (str) => str.match(/-?\d+\.?\d*/g) || [],

    // Add/remove
    addPrefix: (str, prefix) => str.split('\n').map(line => prefix + line).join('\n'),
    addSuffix: (str, suffix) => str.split('\n').map(line => line + suffix).join('\n'),
    addLineNumbers: (str) => str.split('\n').map((line, i) => `${i + 1}. ${line}`).join('\n'),

    // Statistics
    getStats: (str) => ({
        characters: str.length,
        charactersNoSpaces: str.replace(/\s/g, '').length,
        words: str.trim() ? str.trim().split(/\s+/).length : 0,
        lines: str.split('\n').length,
        paragraphs: str.split(/\n\n+/).filter(p => p.trim()).length,
        sentences: (str.match(/[.!?]+/g) || []).length
    }),

    // Word frequency
    wordFrequency: (str) => {
        const words = str.toLowerCase().match(/\b\w+\b/g) || [];
        const freq = {};
        words.forEach(word => {
            freq[word] = (freq[word] || 0) + 1;
        });
        return Object.entries(freq).sort((a, b) => b[1] - a[1]);
    }
};

// ========================================
// Encoding Utilities
// ========================================
const EncodingUtils = {
    // URL
    urlEncode: (str) => encodeURIComponent(str),
    urlDecode: (str) => decodeURIComponent(str),

    // HTML
    htmlEncode: (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },
    htmlDecode: (str) => {
        const div = document.createElement('div');
        div.innerHTML = str;
        return div.textContent;
    },

    // Base64
    base64Encode: (str) => btoa(unescape(encodeURIComponent(str))),
    base64Decode: (str) => decodeURIComponent(escape(atob(str))),

    // Binary
    textToBinary: (str) => str.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '),
    binaryToText: (str) => str.split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join(''),

    // Hex
    textToHex: (str) => str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' '),
    hexToText: (str) => str.split(/\s+/).map(h => String.fromCharCode(parseInt(h, 16))).join(''),

    // Octal
    textToOctal: (str) => str.split('').map(c => c.charCodeAt(0).toString(8).padStart(3, '0')).join(' '),
    octalToText: (str) => str.split(/\s+/).map(o => String.fromCharCode(parseInt(o, 8))).join(''),

    // Decimal
    textToDecimal: (str) => str.split('').map(c => c.charCodeAt(0)).join(' '),
    decimalToText: (str) => str.split(/\s+/).map(d => String.fromCharCode(parseInt(d, 10))).join(''),

    // Morse Code
    textToMorse: (str) => {
        const morse = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
            'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
            'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
            'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
            '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
            '8': '---..', '9': '----.', ' ': '/'
        };
        return str.toUpperCase().split('').map(c => morse[c] || c).join(' ');
    },
    morseToText: (str) => {
        const morse = {
            '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
            '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
            '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
            '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
            '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
            '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
            '---..': '8', '----.': '9', '/': ' '
        };
        return str.split(' ').map(code => morse[code] || code).join('');
    },

    // ROT13
    rot13: (str) => str.replace(/[a-zA-Z]/g, c => {
        const start = c <= 'Z' ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - start + 13) % 26 + start);
    }),

    // ROT47
    rot47: (str) => str.replace(/[!-~]/g, c => {
        return String.fromCharCode((c.charCodeAt(0) - 33 + 47) % 94 + 33);
    })
};

// ========================================
// Number Utilities
// ========================================
const NumberUtils = {
    // Base conversions
    decToBin: (n) => parseInt(n, 10).toString(2),
    decToOct: (n) => parseInt(n, 10).toString(8),
    decToHex: (n) => parseInt(n, 10).toString(16).toUpperCase(),
    binToDec: (n) => parseInt(n, 2).toString(10),
    binToOct: (n) => parseInt(n, 2).toString(8),
    binToHex: (n) => parseInt(n, 2).toString(16).toUpperCase(),
    octToDec: (n) => parseInt(n, 8).toString(10),
    octToBin: (n) => parseInt(n, 8).toString(2),
    octToHex: (n) => parseInt(n, 8).toString(16).toUpperCase(),
    hexToDec: (n) => parseInt(n, 16).toString(10),
    hexToBin: (n) => parseInt(n, 16).toString(2),
    hexToOct: (n) => parseInt(n, 16).toString(8),

    // Generic base conversion
    convertBase: (num, fromBase, toBase) => parseInt(num, fromBase).toString(toBase),

    // Roman numerals
    decToRoman: (num) => {
        const roman = [
            ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
            ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
            ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
        ];
        let result = '';
        for (const [letter, value] of roman) {
            while (num >= value) {
                result += letter;
                num -= value;
            }
        }
        return result;
    },
    romanToDec: (str) => {
        const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            const current = roman[str[i].toUpperCase()];
            const next = roman[str[i + 1]?.toUpperCase()];
            if (next && current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        return result;
    },

    // Number to words
    numberToWords: (num) => {
        if (num === 0) return 'zero';
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

        const convertChunk = (n) => {
            if (n === 0) return '';
            if (n < 10) return ones[n];
            if (n < 20) return teens[n - 10];
            if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
            return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + convertChunk(n % 100) : '');
        };

        const chunks = [];
        while (num > 0) {
            chunks.push(num % 1000);
            num = Math.floor(num / 1000);
        }

        return chunks.map((chunk, i) => {
            if (chunk === 0) return '';
            return convertChunk(chunk) + (scales[i] ? ' ' + scales[i] : '');
        }).reverse().filter(Boolean).join(' ');
    },

    // Formatting
    addThousandsSeparator: (num, separator = ',') => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    },

    // Math
    isPrime: (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    },

    generatePrimes: (max) => {
        const primes = [];
        for (let i = 2; i <= max; i++) {
            if (NumberUtils.isPrime(i)) primes.push(i);
        }
        return primes;
    },

    fibonacci: (n) => {
        const seq = [0, 1];
        for (let i = 2; i < n; i++) {
            seq.push(seq[i - 1] + seq[i - 2]);
        }
        return seq.slice(0, n);
    }
};

// ========================================
// Color Utilities
// ========================================
const ColorUtils = {
    hexToRgb: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    rgbToHex: (r, g, b) => {
        return '#' + [r, g, b].map(x => {
            const hex = Math.round(x).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    },

    rgbToHsl: (r, g, b) => {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }

        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    },

    hslToRgb: (h, s, l) => {
        h /= 360; s /= 100; l /= 100;
        let r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    },

    rgbToCmyk: (r, g, b) => {
        let c = 1 - (r / 255);
        let m = 1 - (g / 255);
        let y = 1 - (b / 255);
        const k = Math.min(c, m, y);

        c = Math.round((c - k) / (1 - k) * 100) || 0;
        m = Math.round((m - k) / (1 - k) * 100) || 0;
        y = Math.round((y - k) / (1 - k) * 100) || 0;

        return { c, m, y, k: Math.round(k * 100) };
    },

    cmykToRgb: (c, m, y, k) => {
        c /= 100; m /= 100; y /= 100; k /= 100;
        return {
            r: Math.round(255 * (1 - c) * (1 - k)),
            g: Math.round(255 * (1 - m) * (1 - k)),
            b: Math.round(255 * (1 - y) * (1 - k))
        };
    },

    randomColor: () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
};

// ========================================
// Date Utilities
// ========================================
const DateUtils = {
    unixToDate: (timestamp) => new Date(timestamp * 1000),
    dateToUnix: (date) => Math.floor(new Date(date).getTime() / 1000),

    formatDate: (date, format) => {
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, '0');

        return format
            .replace('YYYY', d.getFullYear())
            .replace('MM', pad(d.getMonth() + 1))
            .replace('DD', pad(d.getDate()))
            .replace('HH', pad(d.getHours()))
            .replace('mm', pad(d.getMinutes()))
            .replace('ss', pad(d.getSeconds()));
    },

    toISO: (date) => new Date(date).toISOString(),

    daysBetween: (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return Math.floor(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
    },

    addDays: (date, days) => {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    },

    secondsToHMS: (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    },

    hmsToSeconds: (hms) => {
        const parts = hms.split(':').map(Number);
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
};

// ========================================
// Random Generators
// ========================================
const RandomUtils = {
    string: (length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    number: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    uuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    password: (length = 16, options = {}) => {
        const {
            uppercase = true,
            lowercase = true,
            numbers = true,
            symbols = true
        } = options;

        let chars = '';
        if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) chars += '0123456789';
        if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        return RandomUtils.string(length, chars);
    },

    hex: (length = 32) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 16).toString(16);
        }
        return result;
    },

    pick: (array) => array[Math.floor(Math.random() * array.length)],

    shuffle: (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

// ========================================
// IP Utilities
// ========================================
const IPUtils = {
    ipToBinary: (ip) => {
        return ip.split('.').map(n => parseInt(n).toString(2).padStart(8, '0')).join('.');
    },

    binaryToIp: (binary) => {
        return binary.split('.').map(b => parseInt(b, 2)).join('.');
    },

    ipToDecimal: (ip) => {
        const parts = ip.split('.').map(Number);
        return ((parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0;
    },

    decimalToIp: (decimal) => {
        return [
            (decimal >>> 24) & 255,
            (decimal >>> 16) & 255,
            (decimal >>> 8) & 255,
            decimal & 255
        ].join('.');
    },

    ipToHex: (ip) => {
        return ip.split('.').map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
    },

    hexToIp: (hex) => {
        const parts = [];
        for (let i = 0; i < 8; i += 2) {
            parts.push(parseInt(hex.substr(i, 2), 16));
        }
        return parts.join('.');
    }
};

// Export to window
window.TextUtils = TextUtils;
window.EncodingUtils = EncodingUtils;
window.NumberUtils = NumberUtils;
window.ColorUtils = ColorUtils;
window.DateUtils = DateUtils;
window.RandomUtils = RandomUtils;
window.IPUtils = IPUtils;


