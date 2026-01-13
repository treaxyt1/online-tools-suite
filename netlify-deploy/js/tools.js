/**
 * onlinetoolfree.com - Complete Tool Registry
 * All tools verified and mapped to existing files.
 */

const TOOLS_REGISTRY = [
    // ========================================
    // URL & Encoding Tools
    // ========================================
    { id: 'url-encoder', name: 'URL Encoder', description: 'Convert special characters to percent-encoding', category: 'URL & Encoding', url: 'tools/url/encoder.html', icon: 'link' },
    { id: 'url-decoder', name: 'URL Decoder', description: 'Decode percent-encoded URLs', category: 'URL & Encoding', url: 'tools/url/decoder.html', icon: 'link' },
    { id: 'url-parser', name: 'URL Parser', description: 'Split URL into protocol, host, path, query, hash', category: 'URL & Encoding', url: 'tools/url/url-parser.html', icon: 'link' },
    { id: 'jwt-decoder', name: 'JWT Decoder', description: 'Decode and inspect JSON Web Tokens', category: 'URL & Encoding', url: 'tools/encoding/jwt-decoder.html', icon: 'shield' },
    { id: 'html-encoder', name: 'HTML Encoder', description: 'Convert characters to HTML entities', category: 'URL & Encoding', url: 'tools/encoding/html-encoder.html', icon: 'code' },
    { id: 'html-decoder', name: 'HTML Decoder', description: 'Decode HTML entities to text', category: 'URL & Encoding', url: 'tools/encoding/html-decoder.html', icon: 'code' },
    { id: 'base64-encoder', name: 'Base64 Encoder', description: 'Encode text/files to Base64', category: 'URL & Encoding', url: 'tools/encoding/base64-encoder.html', icon: 'file-text' },
    { id: 'base64-decoder', name: 'Base64 Decoder', description: 'Decode Base64 to text/files', category: 'URL & Encoding', url: 'tools/encoding/base64-decoder.html', icon: 'file-text' },
    { id: 'base32-encoder', name: 'Base32 Encoder', description: 'Encode to Base32 format', category: 'URL & Encoding', url: 'tools/encoding/base32-encoder.html', icon: 'file-text' },
    { id: 'base32-decoder', name: 'Base32 Decoder', description: 'Decode Base32 strings', category: 'URL & Encoding', url: 'tools/encoding/base32-decoder.html', icon: 'file-text' },
    { id: 'base58-encoder', name: 'Base58 Encoder', description: 'Encode to Base58 (Bitcoin-style)', category: 'URL & Encoding', url: 'tools/encoding/base58-encoder.html', icon: 'file-text' },
    { id: 'base58-decoder', name: 'Base58 Decoder', description: 'Decode Base58 strings', category: 'URL & Encoding', url: 'tools/encoding/base58-decoder.html', icon: 'file-text' },
    { id: 'punycode-encoder', name: 'Punycode Encoder', description: 'Encode Unicode domains', category: 'URL & Encoding', url: 'tools/encoding/punycode-encoder.html', icon: 'globe' },
    { id: 'punycode-decoder', name: 'Punycode Decoder', description: 'Decode punycode to Unicode', category: 'URL & Encoding', url: 'tools/encoding/punycode-decoder.html', icon: 'globe' },
    { id: 'rot13', name: 'ROT13 Encoder/Decoder', description: 'Apply ROT13 cipher', category: 'URL & Encoding', url: 'tools/encoding/rot13.html', icon: 'refresh-cw' },
    { id: 'rot47', name: 'ROT47 Encoder/Decoder', description: 'Apply ROT47 cipher', category: 'URL & Encoding', url: 'tools/encoding/rot47.html', icon: 'refresh-cw' },
    { id: 'ascii85', name: 'ASCII85 Encoder/Decoder', description: 'Adobe-style Base85', category: 'URL & Encoding', url: 'tools/encoding/ascii85.html', icon: 'file-text' },

    // ========================================
    // Code Formatters & Minifiers
    // ========================================
    { id: 'html-formatter', name: 'HTML Formatter', description: 'Format and indent HTML beautifully', category: 'Developer', url: 'tools/html/html-prettify.html', icon: 'code' },
    { id: 'html-minifier', name: 'HTML Minifier', description: 'Compress HTML by removing whitespace', category: 'Developer', url: 'tools/html/minifier.html', icon: 'minimize' },
    { id: 'json-formatter', name: 'JSON Formatter', description: 'Format JSON with proper indentation', category: 'Developer', url: 'tools/json/formatter.html', icon: 'braces' },
    { id: 'json-minifier', name: 'JSON Minifier', description: 'Compress JSON to minimum size', category: 'Developer', url: 'tools/json/minifier.html', icon: 'minimize' },
    { id: 'json-validator', name: 'JSON Validator', description: 'Validate JSON syntax', category: 'Developer', url: 'tools/json/validator.html', icon: 'check-circle' },
    { id: 'json-escape', name: 'JSON Escape', description: 'Escape special JSON characters', category: 'Developer', url: 'tools/json/escape.html', icon: 'shield' },
    { id: 'json-unescape', name: 'JSON Unescape', description: 'Unescape JSON strings', category: 'Developer', url: 'tools/json/escape.html', icon: 'shield-off' },
    { id: 'js-formatter', name: 'JavaScript Formatter', description: 'Format JS code beautifully', category: 'Developer', url: 'tools/js/formatter.html', icon: 'code' },
    { id: 'js-minifier', name: 'JavaScript Minifier', description: 'Minify JS code', category: 'Developer', url: 'tools/js/minifier.html', icon: 'minimize' },
    { id: 'css-formatter', name: 'CSS Formatter', description: 'Format CSS with indentation', category: 'Developer', url: 'tools/css/formatter.html', icon: 'palette' },
    { id: 'css-minifier', name: 'CSS Minifier', description: 'Compress CSS code', category: 'Developer', url: 'tools/css/minifier.html', icon: 'minimize' },
    { id: 'xml-formatter', name: 'XML Formatter', description: 'Format XML documents', category: 'Developer', url: 'tools/xml/formatter.html', icon: 'file-code' },
    { id: 'xml-minifier', name: 'XML Minifier', description: 'Compress XML', category: 'Developer', url: 'tools/xml/minifier.html', icon: 'minimize' },
    { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format SQL queries', category: 'Developer', url: 'tools/sql/formatter.html', icon: 'database' },
    { id: 'markdown-to-html', name: 'Markdown to HTML', description: 'Convert Markdown to HTML', category: 'Developer', url: 'tools/html/markdown-to-html.html', icon: 'file-text' },
    { id: 'html-to-markdown', name: 'HTML to Markdown', description: 'Convert HTML to Markdown', category: 'Developer', url: 'tools/html/html-to-markdown.html', icon: 'file-text' },
    { id: 'html-to-text', name: 'HTML to Text', description: 'Strip HTML tags, keep text', category: 'Developer', url: 'tools/html/to-text.html', icon: 'file-minus' },
    { id: 'bbcode-converter', name: 'BBCode Converter', description: 'BBCode to HTML/Markdown', category: 'Developer', url: 'tools/converters/bbcode.html', icon: 'code' },

    // ========================================
    // Data Converters
    // ========================================
    { id: 'xml-to-json', name: 'XML to JSON', description: 'Convert XML to JSON format', category: 'Converters', url: 'tools/xml/xml-to-json.html', icon: 'repeat' },
    { id: 'json-to-xml', name: 'JSON to XML', description: 'Convert JSON to XML', category: 'Converters', url: 'tools/json/json-to-xml.html', icon: 'repeat' },
    { id: 'json-to-csv', name: 'JSON to CSV', description: 'Convert JSON to CSV', category: 'Converters', url: 'tools/json/json-to-csv.html', icon: 'repeat' },
    { id: 'csv-to-json', name: 'CSV to JSON', description: 'Convert CSV to JSON', category: 'Converters', url: 'tools/converters/csv-to-json.html', icon: 'repeat' },
    { id: 'json-to-yaml', name: 'JSON to YAML', description: 'Convert JSON to YAML', category: 'Converters', url: 'tools/json/json-to-yaml.html', icon: 'repeat' },
    { id: 'yaml-to-json', name: 'YAML to JSON', description: 'Convert YAML to JSON', category: 'Converters', url: 'tools/converters/yaml-to-json.html', icon: 'repeat' },
    { id: 'csv-to-xml', name: 'CSV to XML', description: 'Convert CSV to XML', category: 'Converters', url: 'tools/converters/csv-to-xml.html', icon: 'repeat' },
    { id: 'xml-to-csv', name: 'XML to CSV', description: 'Convert XML to CSV', category: 'Converters', url: 'tools/converters/xml-to-csv.html', icon: 'repeat' },
    { id: 'text-to-binary', name: 'Text to Binary', description: 'Convert text to binary', category: 'Converters', url: 'tools/converters/text-to-binary.html', icon: 'binary' },
    { id: 'binary-to-text', name: 'Binary to Text', description: 'Convert binary to text', category: 'Converters', url: 'tools/converters/binary-to-text.html', icon: 'binary' },
    { id: 'text-to-hex', name: 'Text to Hex', description: 'Convert text to hexadecimal', category: 'Converters', url: 'tools/converters/text-to-hex.html', icon: 'hash' },
    { id: 'hex-to-text', name: 'Hex to Text', description: 'Convert hexadecimal to text', category: 'Converters', url: 'tools/converters/hex-to-text.html', icon: 'hash' },
    { id: 'text-to-morse', name: 'Text to Morse Code', description: 'Convert text to Morse code', category: 'Converters', url: 'tools/converters/morse.html', icon: 'radio' },
    { id: 'morse-to-text', name: 'Morse Code to Text', description: 'Convert Morse code to text', category: 'Converters', url: 'tools/converters/morse.html', icon: 'radio' },
    { id: 'text-to-octal', name: 'Text to Octal', description: 'Convert text to octal', category: 'Converters', url: 'tools/converters/text-to-octal.html', icon: 'hash' },
    { id: 'octal-to-text', name: 'Octal to Text', description: 'Convert octal to text', category: 'Converters', url: 'tools/converters/octal-to-text.html', icon: 'hash' },
    { id: 'image-to-base64', name: 'Image to Base64', description: 'Convert image to Base64 string', category: 'Converters', url: 'tools/image/image-to-base64.html', icon: 'image' },
    { id: 'base64-to-image', name: 'Base64 to Image', description: 'Convert Base64 to image', category: 'Converters', url: 'tools/image/base64-to-image.html', icon: 'image' },
    { id: 'length-converter', name: 'Length Converter', description: 'Convert between different length units', category: 'Converters', url: 'tools/converters/length.html', icon: 'maximize' },
    { id: 'weight-converter', name: 'Weight Converter', description: 'Convert between different weight units', category: 'Converters', url: 'tools/converters/weight.html', icon: 'anchor' },
    { id: 'temp-converter', name: 'Temperature Converter', description: 'Convert Celsius, Fahrenheit, Kelvin', category: 'Converters', url: 'tools/converters/temperature.html', icon: 'thermometer' },
    { id: 'byte-converter', name: 'Byte Converter', description: 'Convert KB, MB, GB, TB', category: 'Converters', url: 'tools/converters/bytes.html', icon: 'database' },

    // ========================================
    // Color Tools
    // ========================================
    { id: 'hex-to-rgb', name: 'Hex to RGB', description: 'Convert HEX to RGB color', category: 'Color Tools', url: 'tools/color/hex-to-rgb.html', icon: 'palette' },
    { id: 'rgb-to-hex', name: 'RGB to Hex', description: 'Convert RGB to HEX', category: 'Color Tools', url: 'tools/color/rgb-to-hex.html', icon: 'palette' },
    { id: 'rgb-to-hsl', name: 'RGB to HSL', description: 'Convert RGB to HSL', category: 'Color Tools', url: 'tools/color/rgb-to-hsl.html', icon: 'palette' },
    { id: 'hsl-to-rgb', name: 'HSL to RGB', description: 'Convert HSL to RGB', category: 'Color Tools', url: 'tools/color/hsl-to-rgb.html', icon: 'palette' },
    { id: 'rgb-to-cmyk', name: 'RGB to CMYK', description: 'Convert RGB to CMYK', category: 'Color Tools', url: 'tools/color/rgb-to-cmyk.html', icon: 'palette' },
    { id: 'cmyk-to-rgb', name: 'CMYK to RGB', description: 'Convert CMYK to RGB', category: 'Color Tools', url: 'tools/color/cmyk-to-rgb.html', icon: 'palette' },
    { id: 'color-picker', name: 'Color Picker', description: 'Pick colors visually', category: 'Color Tools', url: 'tools/color/picker.html', icon: 'eye-dropper' },
    { id: 'random-color', name: 'Random Color Generator', description: 'Generate random colors', category: 'Color Tools', url: 'tools/color/random.html', icon: 'shuffle' },
    { id: 'color-converter', name: 'Color Converter', description: 'Convert HEX, RGB, HSL, CMYK', category: 'Color Tools', url: 'tools/color/color-converter.html', icon: 'palette' },
    { id: 'palette-generator', name: 'Color Palette Generator', description: 'Generate beautiful color palettes', category: 'Color Tools', url: 'tools/color/palette.html', icon: 'palette' },
    { id: 'contrast-checker', name: 'Contrast Checker', description: 'Check color contrast for accessibility', category: 'Color Tools', url: 'tools/color/contrast-checker.html', icon: 'eye' },

    // ========================================
    // Text Transformation
    // ========================================
    { id: 'text-lowercase', name: 'Text to Lowercase', description: 'Convert all to lowercase', category: 'Text Tools', url: 'tools/text/lowercase.html', icon: 'type' },
    { id: 'text-uppercase', name: 'Text to Uppercase', description: 'Convert all to UPPERCASE', category: 'Text Tools', url: 'tools/text/uppercase.html', icon: 'type' },
    { id: 'text-titlecase', name: 'Text to Title Case', description: 'Convert To Title Case', category: 'Text Tools', url: 'tools/text/titlecase.html', icon: 'type' },
    { id: 'text-sentencecase', name: 'Text to Sentence Case', description: 'Capitalize first letter', category: 'Text Tools', url: 'tools/text/sentencecase.html', icon: 'type' },
    { id: 'remove-duplicates', name: 'Remove Duplicate Lines', description: 'Delete repeated lines', category: 'Text Tools', url: 'tools/text/remove-duplicates.html', icon: 'minus-circle' },
    { id: 'sort-lines', name: 'Sort Lines', description: 'Sort lines alphabetically', category: 'Text Tools', url: 'tools/text/sort-lines.html', icon: 'arrow-down-az' },
    { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, lines', category: 'Text Tools', url: 'tools/text/word-counter.html', icon: 'hash' },
    { id: 'character-counter', name: 'Character Counter', description: 'Count characters in text', category: 'Text Tools', url: 'tools/text/character-counter.html', icon: 'hash' },
    { id: 'line-counter', name: 'Line Counter', description: 'Count lines in text', category: 'Text Tools', url: 'tools/text/word-counter.html', icon: 'list' },
    { id: 'find-replace', name: 'Find and Replace', description: 'Find and replace text', category: 'Text Tools', url: 'tools/text/find-replace.html', icon: 'search' },
    { id: 'add-line-numbers', name: 'Add Line Numbers', description: 'Number each line', category: 'Text Tools', url: 'tools/text/line-numbers.html', icon: 'list-ordered' },
    { id: 'trim-whitespace', name: 'Trim Whitespace', description: 'Remove leading/trailing spaces', category: 'Text Tools', url: 'tools/text/trim-whitespace.html', icon: 'scissors' },
    { id: 'extract-emails', name: 'Extract Emails', description: 'Find all email addresses', category: 'Text Tools', url: 'tools/text/extract-emails.html', icon: 'mail' },
    { id: 'extract-urls', name: 'Extract URLs', description: 'Find all web links', category: 'Text Tools', url: 'tools/text/extract-urls.html', icon: 'link' },
    { id: 'text-reverse', name: 'Reverse Text', description: 'Reverse characters', category: 'Text Tools', url: 'tools/text/reverse-text.html', icon: 'arrow-left-right' },
    { id: 'lorem-ipsum', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', category: 'Text Tools', url: 'tools/text/lorem-ipsum.html', icon: 'file-text' },
    { id: 'regex-tester', name: 'Regex Tester', description: 'Test regular expressions', category: 'Text Tools', url: 'tools/text/regex-tester.html', icon: 'regex' },
    { id: 'text-diff', name: 'Text Diff', description: 'Compare two texts', category: 'Text Tools', url: 'tools/text/diff.html', icon: 'git-compare' },
    { id: 'text-analysis', name: 'Text Analysis Tool', description: 'Analyze sentiment and stats', category: 'Text Tools', url: 'tools/text/analysis.html', icon: 'bar-chart-2' },

    // ========================================
    // Hash & Encryption
    // ========================================
    { id: 'md5-hash', name: 'MD5 Hash Generator', description: 'Calculate MD5 checksum', category: 'Hash & Encryption', url: 'tools/hash/md5.html', icon: 'lock' },
    { id: 'sha1-hash', name: 'SHA1 Hash Generator', description: 'Calculate SHA1 checksum', category: 'Hash & Encryption', url: 'tools/hash/sha1.html', icon: 'lock' },
    { id: 'sha256-hash', name: 'SHA256 Hash Generator', description: 'Calculate SHA256 checksum', category: 'Hash & Encryption', url: 'tools/hash/sha256.html', icon: 'lock' },
    { id: 'sha512-hash', name: 'SHA512 Hash Generator', description: 'Calculate SHA512 checksum', category: 'Hash & Encryption', url: 'tools/hash/sha512.html', icon: 'lock' },
    { id: 'all-hashes', name: 'All Hashes Generator', description: 'Calculate all hashes at once', category: 'Hash & Encryption', url: 'tools/hash/all.html', icon: 'layers' },
    { id: 'bcrypt-generator', name: 'Bcrypt Generator', description: 'Generate bcrypt hash', category: 'Hash & Encryption', url: 'tools/hash/bcrypt.html', icon: 'key' },
    { id: 'xor-cipher', name: 'XOR Cipher', description: 'Simple XOR encryption', category: 'Hash & Encryption', url: 'tools/encryption/xor-cipher.html', icon: 'lock' },

    // ========================================
    // Random Generators
    // ========================================
    { id: 'password-generator', name: 'Password Generator', description: 'Generate secure passwords', category: 'Generators', url: 'tools/random/password.html', icon: 'key' },
    { id: 'uuid-generator', name: 'UUID Generator', description: 'Generate UUIDs/GUIDs', category: 'Generators', url: 'tools/random/uuid.html', icon: 'fingerprint' },
    { id: 'random-string', name: 'Random String Generator', description: 'Generate random strings', category: 'Generators', url: 'tools/random/string.html', icon: 'shuffle' },
    { id: 'random-number', name: 'Random Number Generator', description: 'Generate random numbers', category: 'Generators', url: 'tools/random/number.html', icon: 'dice' },
    { id: 'random-hex', name: 'Random Hex Generator', description: 'Generate random hex colors', category: 'Generators', url: 'tools/random/hex.html', icon: 'hash' },
    { id: 'random-json', name: 'Random JSON Generator', description: 'Generate random JSON', category: 'Generators', url: 'tools/random/json.html', icon: 'braces' },
    { id: 'random-csv', name: 'Random CSV Generator', description: 'Generate random CSV', category: 'Generators', url: 'tools/random/csv.html', icon: 'table' },
    { id: 'fibonacci-gen', name: 'Fibonacci Generator', description: 'Generate Fibonacci sequence', category: 'Generators', url: 'tools/math/fibonacci-generator.html', icon: 'trending-up' },
    { id: 'prime-gen', name: 'Prime Number Generator', description: 'Generate prime numbers', category: 'Generators', url: 'tools/math/prime-generator.html', icon: 'hash' },

    // ========================================
    // Number & Base Converters
    // ========================================
    { id: 'binary-to-decimal', name: 'Binary to Decimal', description: 'Convert binary to decimal', category: 'Number Converters', url: 'tools/number/binary-to-decimal.html', icon: 'binary' },
    { id: 'decimal-to-binary', name: 'Decimal to Binary', description: 'Convert decimal to binary', category: 'Number Converters', url: 'tools/number/decimal-to-binary.html', icon: 'binary' },
    { id: 'decimal-to-hex', name: 'Decimal to Hex', description: 'Convert decimal to hexadecimal', category: 'Number Converters', url: 'tools/number/decimal-to-hex.html', icon: 'hash' },
    { id: 'hex-to-decimal', name: 'Hex to Decimal', description: 'Convert hexadecimal to decimal', category: 'Number Converters', url: 'tools/number/hex-to-decimal.html', icon: 'hash' },
    { id: 'number-to-words', name: 'Number to Words', description: 'Convert numbers to English', category: 'Number Converters', url: 'tools/number/number-to-words.html', icon: 'type' },
    { id: 'roman-numerals', name: 'Roman Numerals Converter', description: 'Decimal to Roman and back', category: 'Number Converters', url: 'tools/number/roman-numeral.html', icon: 'type' },
    { id: 'base-converter', name: 'Base Converter', description: 'Convert any base to any base', category: 'Number Converters', url: 'tools/number/base-converter.html', icon: 'repeat' },
    { id: 'percentage-calc', name: 'Percentage Calculator', description: 'Calculate percentages easily', category: 'Number Converters', url: 'tools/number/percentage-calculator.html', icon: 'percent' },

    // ========================================
    // Date & Time Tools
    // ========================================
    { id: 'unix-to-date', name: 'Unix Timestamp to Date', description: 'Convert timestamp to date', category: 'Date & Time', url: 'tools/datetime/unix-to-date.html', icon: 'calendar' },
    { id: 'date-to-unix', name: 'Date to Unix Timestamp', description: 'Convert date to timestamp', category: 'Date & Time', url: 'tools/datetime/date-to-unix.html', icon: 'clock' },
    { id: 'unix-timestamp', name: 'Unix Timestamp Converter', description: 'Convert between epoch and dates', category: 'Date & Time', url: 'tools/datetime/unix-timestamp.html', icon: 'clock' },
    { id: 'date-difference', name: 'Date Difference', description: 'Calculate days between dates', category: 'Date & Time', url: 'tools/datetime/difference.html', icon: 'calendar' },
    { id: 'add-subtract-date', name: 'Add/Subtract Days', description: 'Modify dates', category: 'Date & Time', url: 'tools/datetime/add-subtract.html', icon: 'calendar' },
    { id: 'seconds-to-hms', name: 'Seconds to H:M:S', description: 'Convert seconds to time', category: 'Date & Time', url: 'tools/datetime/seconds-to-hms.html', icon: 'clock' },
    { id: 'hms-to-seconds', name: 'H:M:S to Seconds', description: 'Convert time to seconds', category: 'Date & Time', url: 'tools/datetime/hms-to-seconds.html', icon: 'clock' },
    { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate age from birth date', category: 'Date & Time', url: 'tools/datetime/age-calculator.html', icon: 'user' },
    { id: 'countdown-timer', name: 'Countdown Timer', description: 'Simple online countdown', category: 'Date & Time', url: 'tools/datetime/countdown.html', icon: 'timer' },
    { id: 'stopwatch', name: 'Online Stopwatch', description: 'Simple online stopwatch', category: 'Date & Time', url: 'tools/datetime/stopwatch.html', icon: 'clock' },
    { id: 'cron-parser', name: 'Cron Expression Parser', description: 'Parse and explain cron schedules', category: 'Date & Time', url: 'tools/datetime/cron-parser.html', icon: 'calendar' },

    // ========================================
    // IP & Network Tools
    // ========================================
    { id: 'ip-to-binary', name: 'IP to Binary', description: 'Convert IP to binary', category: 'Network Tools', url: 'tools/network/ip-to-binary.html', icon: 'wifi' },
    { id: 'binary-to-ip', name: 'Binary to IP', description: 'Convert binary to IP', category: 'Network Tools', url: 'tools/network/binary-to-ip.html', icon: 'wifi' },
    { id: 'ip-to-decimal', name: 'IP to Decimal', description: 'Convert IP to decimal', category: 'Network Tools', url: 'tools/network/ip-to-decimal.html', icon: 'wifi' },
    { id: 'decimal-to-ip', name: 'Decimal to IP', description: 'Convert decimal to IP', category: 'Network Tools', url: 'tools/network/decimal-to-ip.html', icon: 'wifi' },
    { id: 'ip-to-hex', name: 'IP to Hex', description: 'Convert IP to hexadecimal', category: 'Network Tools', url: 'tools/network/ip-to-hex.html', icon: 'wifi' },
    { id: 'random-ip', name: 'Random IP Generator', description: 'Generate random IPs', category: 'Network Tools', url: 'tools/network/random-ip.html', icon: 'shuffle' },
    { id: 'random-mac', name: 'Random MAC Generator', description: 'Generate MAC addresses', category: 'Network Tools', url: 'tools/network/random-mac.html', icon: 'cpu' },
    { id: 'whats-my-ip', name: "What's My IP", description: 'Check your current public IP address', category: 'Network Tools', url: 'tools/network/whats-my-ip.html', icon: 'globe' },
    { id: 'subnet-calc', name: 'Subnet Calculator', description: 'Calculate IP subnets and ranges', category: 'Network Tools', url: 'tools/network/subnet-calculator.html', icon: 'layers' },

    // ========================================
    // SEO & Marketing Tools
    // ========================================
    { id: 'meta-tags-generator', name: 'Meta Tags Generator', description: 'Generate HTML meta tags', category: 'SEO Tools', url: 'tools/seo/meta-tags.html', icon: 'tag' },
    { id: 'og-tags-generator', name: 'Open Graph Generator', description: 'Generate OG tags for social', category: 'SEO Tools', url: 'tools/seo/og-tags.html', icon: 'share-2' },
    { id: 'twitter-card-generator', name: 'Twitter Card Generator', description: 'Generate Twitter card tags', category: 'SEO Tools', url: 'tools/seo/twitter-card.html', icon: 'twitter' },
    { id: 'robots-txt-generator', name: 'Robots.txt Generator', description: 'Create robots.txt file', category: 'SEO Tools', url: 'tools/seo/robots-txt.html', icon: 'bot' },
    { id: 'sitemap-generator', name: 'Sitemap Generator', description: 'Generate XML sitemap', category: 'SEO Tools', url: 'tools/seo/sitemap.html', icon: 'map' },
    { id: 'schema-generator', name: 'Schema Markup Generator', description: 'Generate JSON-LD schema', category: 'SEO Tools', url: 'tools/seo/schema.html', icon: 'code' },
    { id: 'slug-generator', name: 'Slug Generator', description: 'Create URL-friendly slugs', category: 'SEO Tools', url: 'tools/seo/slug.html', icon: 'link' },

    // ========================================
    // Document & Image Tools
    // ========================================
    { id: 'qr-generator', name: 'QR Code Generator', description: 'Generate QR codes', category: 'Document Tools', url: 'tools/document/qr-generator.html', icon: 'qr-code' },
    { id: 'barcode-generator', name: 'Barcode Generator', description: 'Generate barcodes', category: 'Document Tools', url: 'tools/document/barcode.html', icon: 'barcode' },
    { id: 'qr-generator', name: 'QR Code Generator', description: 'Generate QR codes', category: 'Document Tools', url: 'tools/document/qr-generator.html', icon: 'qr-code' },
    { id: 'barcode-generator', name: 'Barcode Generator', description: 'Generate barcodes', category: 'Document Tools', url: 'tools/document/barcode.html', icon: 'barcode' },

    // ========================================
    // PNG Tools
    // ========================================
    { id: 'make-png-transparent', name: 'Make PNG Transparent', description: 'Replace any color with transparency', category: 'PNG Tools', url: 'tools/png/make-png-transparent.html', icon: 'image' },
    { id: 'change-png-colors', name: 'Change Colors in PNG', description: 'Swap one color for another', category: 'PNG Tools', url: 'tools/png/change-png-colors.html', icon: 'palette' },
    { id: 'change-png-opacity', name: 'Change PNG Opacity', description: 'Make PNG translucent', category: 'PNG Tools', url: 'tools/png/change-png-opacity.html', icon: 'image' },
    { id: 'remove-png-alpha', name: 'Remove Alpha Channel', description: 'Convert transparent PNG to opaque', category: 'PNG Tools', url: 'tools/png/remove-png-alpha.html', icon: 'image' },
    { id: 'make-png-opaque', name: 'Make PNG Opaque', description: 'Replace transparency with solid color', category: 'PNG Tools', url: 'tools/png/make-png-opaque.html', icon: 'image' },
    { id: 'png-to-jpg', name: 'Convert PNG to JPG', description: 'Convert PNG to JPEG format', category: 'PNG Tools', url: 'tools/png/png-to-jpg.html', icon: 'repeat' },
    { id: 'jpg-to-png', name: 'Convert JPG to PNG', description: 'Convert JPEG to PNG format', category: 'PNG Tools', url: 'tools/png/jpg-to-png.html', icon: 'repeat' },
    { id: 'resize-png', name: 'Resize PNG', description: 'Resize to any dimensions', category: 'PNG Tools', url: 'tools/png/resize.html', icon: 'maximize' },
    { id: 'rotate-png', name: 'Rotate PNG', description: 'Rotate by any angle', category: 'PNG Tools', url: 'tools/png/rotate.html', icon: 'refresh-cw' },
    { id: 'crop-png', name: 'Crop PNG', description: 'Crop to selection', category: 'PNG Tools', url: 'tools/png/crop.html', icon: 'scissors' },
    { id: 'round-png', name: 'Create Round PNG', description: 'Make circular/oval', category: 'PNG Tools', url: 'tools/png/round.html', icon: 'image' },
    { id: 'flip-png-h', name: 'Flip PNG Horizontally', description: 'Horizontal flip', category: 'PNG Tools', url: 'tools/png/flip-h.html', icon: 'repeat' },
    { id: 'flip-png-v', name: 'Flip PNG Vertically', description: 'Vertical flip', category: 'PNG Tools', url: 'tools/png/flip-v.html', icon: 'repeat' },
    { id: 'grayscale-png', name: 'Create Grayscale PNG', description: 'Convert to grayscale', category: 'PNG Tools', url: 'tools/png/grayscale.html', icon: 'palette' },

    // ========================================
    // JPG Tools
    // ========================================
    { id: 'compress-jpg', name: 'Compress JPG', description: 'Reduce JPG file size', category: 'JPG Tools', url: 'tools/jpg/compress.html', icon: 'minimize' },
    { id: 'resize-jpg', name: 'Resize JPG', description: 'Resize JPG image', category: 'JPG Tools', url: 'tools/jpg/resize.html', icon: 'maximize' },
    { id: 'jpg-to-webp', name: 'Convert JPG to WebP', description: 'Convert JPEG to WebP format', category: 'JPG Tools', url: 'tools/jpg/jpg-to-webp.html', icon: 'repeat' },
    { id: 'jpg-to-pdf', name: 'Convert JPG to PDF', description: 'Convert JPEG to PDF document', category: 'JPG Tools', url: 'tools/jpg/jpg-to-pdf.html', icon: 'file-text' },
    { id: 'grayscale-jpg', name: 'Convert JPG to Grayscale', description: 'Make JPG black and white', category: 'JPG Tools', url: 'tools/jpg/grayscale.html', icon: 'image' },
    { id: 'blur-jpg', name: 'Blur JPG', description: 'Blur JPG image', category: 'JPG Tools', url: 'tools/jpg/blur.html', icon: 'droplet' },
    { id: 'rotate-jpg', name: 'Rotate JPG', description: 'Rotate JPG image', category: 'JPG Tools', url: 'tools/jpg/rotate.html', icon: 'refresh-cw' },
    { id: 'crop-jpg', name: 'Crop JPG', description: 'Crop JPG image', category: 'JPG Tools', url: 'tools/jpg/crop.html', icon: 'scissors' },
    { id: 'flip-jpg-h', name: 'Flip JPG Horizontally', description: 'Mirror JPG horizontally', category: 'JPG Tools', url: 'tools/jpg/flip-h.html', icon: 'columns' },
    { id: 'flip-jpg-v', name: 'Flip JPG Vertically', description: 'Mirror JPG vertically', category: 'JPG Tools', url: 'tools/jpg/flip-v.html', icon: 'rows' },
    { id: 'sepia-jpg', name: 'Sepia JPG', description: 'Apply sepia filter', category: 'JPG Tools', url: 'tools/jpg/sepia.html', icon: 'image' },
    { id: 'brightness-jpg', name: 'Adjust JPG Brightness', description: 'Change image brightness', category: 'JPG Tools', url: 'tools/jpg/brightness.html', icon: 'sun' },
    { id: 'contrast-jpg', name: 'Adjust JPG Contrast', description: 'Change image contrast', category: 'JPG Tools', url: 'tools/jpg/contrast.html', icon: 'circle' },

    // ========================================
    // AI Tools
    // ========================================
    { id: 'ai-text-to-speech', name: 'AI Text to Speech', description: 'Convert text to spoken audio', category: 'AI Tools', url: 'tools/ai/text-to-speech.html', icon: 'volume-2' },
    { id: 'ai-object-detection', name: 'AI Object Detection', description: 'Detect objects in images', category: 'AI Tools', url: 'tools/ai/object-detection.html', icon: 'camera' },
    { id: 'ai-ocr', name: 'AI Image to Text (OCR)', description: 'Extract text from images', category: 'AI Tools', url: 'tools/ai/ocr.html', icon: 'file-text' },
    { id: 'meme-generator', name: 'Meme Generator', description: 'Create custom memes', category: 'Image Tools', url: 'tools/image/meme-generator.html', icon: 'smile' },

    // ========================================

    // ========================================
    // Retro Emulators (Legal & Free)
    // ========================================
    // PlayStation Emulators
    { id: 'epsxe-info', name: 'ePSXe Emulator', description: 'PlayStation 1 emulator (software only)', category: 'Retro Emulators', url: 'tools/emulators/epsxe.html', icon: 'gamepad-2', platform: 'Windows/Linux/Android' },
    { id: 'duckstation-info', name: 'DuckStation Emulator', description: 'Modern PS1 emulator with enhancements', category: 'Retro Emulators', url: 'tools/emulators/duckstation.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },

    // PSP Emulators
    { id: 'ppsspp-info', name: 'PPSSPP Emulator', description: 'PlayStation Portable emulator', category: 'Retro Emulators', url: 'tools/emulators/ppsspp.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux/Android' },

    // Nintendo 64 Emulators
    { id: 'mupen64plus-info', name: 'Mupen64Plus', description: 'Nintendo 64 emulator', category: 'Retro Emulators', url: 'tools/emulators/mupen64plus.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },

    // NES Emulators
    { id: 'fceux-info', name: 'FCEUX Emulator', description: 'NES/Famicom emulator', category: 'Retro Emulators', url: 'tools/emulators/fceux.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },
    { id: 'nestopia-info', name: 'Nestopia Emulator', description: 'High-accuracy NES emulator', category: 'Retro Emulators', url: 'tools/emulators/nestopia.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },

    // SNES Emulators
    { id: 'snes9x-info', name: 'Snes9x Emulator', description: 'Super Nintendo emulator', category: 'Retro Emulators', url: 'tools/emulators/snes9x.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },

    // Game Boy Emulators
    { id: 'mgba-info', name: 'mGBA Emulator', description: 'Game Boy/GBC/GBA emulator', category: 'Retro Emulators', url: 'tools/emulators/mgba.html', icon: 'gamepad-2', platform: 'Windows/Mac/Linux' },

    // Multi-System
    { id: 'retroarch-info', name: 'RetroArch', description: 'Multi-system emulator frontend', category: 'Retro Emulators', url: 'tools/emulators/retroarch.html', icon: 'layers', platform: 'All Platforms' },

    // Emulator Utilities
    { id: 'bios-checker', name: 'BIOS Checker', description: 'Verify emulator BIOS files (user-uploaded)', category: 'Retro Emulators', url: 'tools/emulators/bios-checker.html', icon: 'check-circle', platform: 'Web' },
    { id: 'save-converter', name: 'Save File Converter', description: 'Convert between emulator save formats', category: 'Retro Emulators', url: 'tools/emulators/save-converter.html', icon: 'repeat', platform: 'Web' },
    { id: 'controller-mapper', name: 'Controller Mapping Tester', description: 'Test and configure controller inputs', category: 'Retro Emulators', url: 'tools/emulators/controller-mapper.html', icon: 'gamepad', platform: 'Web' },
    { id: 'fps-tester', name: 'FPS Performance Tester', description: 'Test emulator performance', category: 'Retro Emulators', url: 'tools/emulators/fps-tester.html', icon: 'activity', platform: 'Web' },
    { id: 'config-generator', name: 'Emulator Config Generator', description: 'Generate optimal emulator settings', category: 'Retro Emulators', url: 'tools/emulators/config-generator.html', icon: 'settings', platform: 'Web' },
    { id: 'cheat-editor', name: 'Cheat File Editor', description: 'Edit cheat codes (homebrew only)', category: 'Retro Emulators', url: 'tools/emulators/cheat-editor.html', icon: 'edit', platform: 'Web' },
    { id: 'shader-preview', name: 'Shader Preset Preview', description: 'Preview CRT and shader effects', category: 'Retro Emulators', url: 'tools/emulators/shader-preview.html', icon: 'eye', platform: 'Web' },
    { id: 'emulator-compare', name: 'Emulator Comparison Tool', description: 'Compare emulator features', category: 'Retro Emulators', url: 'tools/emulators/emulator-compare.html', icon: 'git-compare', platform: 'Web' },
    { id: 'aspect-ratio-calc', name: 'Aspect Ratio Calculator', description: 'Calculate proper screen ratios', category: 'Retro Emulators', url: 'tools/emulators/aspect-ratio.html', icon: 'maximize', platform: 'Web' },
    { id: 'input-latency', name: 'Input Latency Tester', description: 'Measure controller lag', category: 'Retro Emulators', url: 'tools/emulators/input-latency.html', icon: 'zap', platform: 'Web' },

    // ========================================
    // Productivity Tools (NEW - High Demand)
    // ========================================
    { id: 'tip-calculator', name: 'Tip Calculator', description: 'Calculate tips and split bills easily', category: 'Productivity', url: 'tools/productivity/tip-calculator.html', icon: 'calculator' },
    { id: 'character-counter-new', name: 'Character Counter', description: 'Count characters with platform limits', category: 'Productivity', url: 'tools/productivity/character-counter.html', icon: 'type' },
    { id: 'todo-list', name: 'To-Do List', description: 'Task manager with no sign-up required', category: 'Productivity', url: 'tools/productivity/todo-list.html', icon: 'check-square' },
    { id: 'note-taking', name: 'Note Taking App', description: 'Private browser-based notes with auto-save', category: 'Productivity', url: 'tools/productivity/note-taking.html', icon: 'file-text' },
    { id: 'habit-tracker', name: 'Habit Tracker', description: 'Track daily habits with visual progress', category: 'Productivity', url: 'tools/productivity/habit-tracker.html', icon: 'check-circle' },
    { id: 'decision-maker', name: 'Decision Maker', description: 'Random decision maker for tough choices', category: 'Productivity', url: 'tools/productivity/decision-maker.html', icon: 'shuffle' },
    { id: 'focus-timer', name: 'Focus Timer', description: 'Pomodoro technique timer for productivity', category: 'Productivity', url: 'tools/productivity/focus-timer.html', icon: 'clock' },
    { id: 'time-until', name: 'Time Until Calculator', description: 'Countdown to any future event', category: 'Productivity', url: 'tools/productivity/time-until.html', icon: 'calendar' },

    // ========================================
    // Finance Tools (NEW - High Demand)
    // ========================================
    { id: 'salary-calculator', name: 'Salary Calculator', description: 'Calculate take-home pay after taxes', category: 'Finance', url: 'tools/finance/salary-calculator.html', icon: 'dollar-sign' },
    { id: 'loan-calculator', name: 'Loan Calculator', description: 'Calculate monthly payments and amortization', category: 'Finance', url: 'tools/finance/loan-calculator.html', icon: 'trending-up' },
    { id: 'budget-planner', name: 'Budget Planner', description: '50/30/20 budget rule calculator', category: 'Finance', url: 'tools/finance/budget-planner.html', icon: 'pie-chart' },
    { id: 'price-comparison', name: 'Price Comparison', description: 'Compare unit prices to find best value', category: 'Finance', url: 'tools/finance/price-comparison.html', icon: 'shopping-cart' },
    { id: 'freelance-rate', name: 'Freelance Rate Calculator', description: 'Calculate your ideal hourly rate', category: 'Finance', url: 'tools/finance/freelance-rate.html', icon: 'briefcase' },

    // ========================================
    // Writing Tools (NEW - High Demand)
    // ========================================
    { id: 'paraphrasing-tool', name: 'Paraphrasing Tool', description: 'Rephrase text with synonym replacement', category: 'Writing', url: 'tools/writing/paraphrasing-tool.html', icon: 'edit' },
    { id: 'essay-outline', name: 'Essay Outline Generator', description: 'Generate structured essay outlines', category: 'Writing', url: 'tools/writing/essay-outline.html', icon: 'list' },
    { id: 'readability-score', name: 'Readability Score', description: 'Calculate Flesch reading ease score', category: 'Writing', url: 'tools/writing/readability-score.html', icon: 'book-open' },
    { id: 'plagiarism-checker', name: 'Plagiarism Checker', description: 'Compare text similarity percentage', category: 'Writing', url: 'tools/writing/plagiarism-checker.html', icon: 'search' },
    { id: 'word-frequency', name: 'Word Frequency Counter', description: 'Count word frequency in text', category: 'Writing', url: 'tools/writing/word-frequency.html', icon: 'bar-chart' },

    // ========================================
    // SEO Tools (NEW - High Demand)
    // ========================================
    { id: 'utm-builder', name: 'UTM Link Builder', description: 'Create campaign tracking URLs', category: 'SEO Tools', url: 'tools/seo/utm-builder.html', icon: 'link' },
    { id: 'keyword-density', name: 'Keyword Density Checker', description: 'Analyze keyword frequency in content', category: 'SEO Tools', url: 'tools/seo/keyword-density.html', icon: 'search' },
    { id: 'meta-preview', name: 'Meta Tag Preview', description: 'Preview Google SERP appearance', category: 'SEO Tools', url: 'tools/seo/meta-preview.html', icon: 'eye' },
    { id: 'backlink-checker', name: 'Link Status Checker', description: 'Check if links are active', category: 'SEO Tools', url: 'tools/seo/backlink-checker.html', icon: 'external-link' },
    { id: 'og-image-gen', name: 'OG Image Generator', description: 'Create Open Graph images', category: 'SEO Tools', url: 'tools/seo/og-image-generator.html', icon: 'image' },

    // ========================================
    // Image Tools (NEW - High Demand)
    // ========================================

    // ========================================

    // ========================================
    // Video Tools (NEW - High Demand)
    // ========================================
    { id: 'video-to-gif', name: 'Video to GIF', description: 'Convert MP4/WebM to GIF', category: 'Video Tools', url: 'tools/video/video-to-gif.html', icon: 'film' },
    { id: 'screen-recorder', name: 'Screen Recorder', description: 'Record your screen instantly', category: 'Video Tools', url: 'tools/video/screen-recorder.html', icon: 'monitor' },

    // ========================================
    // Calculator Tools (TIER 1 - Highest Priority)
    // ========================================
    { id: 'percentage-calc', name: 'Percentage Calculator', description: 'Calculate percentages, increase, decrease', category: 'Calculator Tools', url: 'tools/calculator/percentage-calculator.html', icon: 'percent' },
    { id: 'age-calc', name: 'Age Calculator', description: 'Calculate exact age from birth date', category: 'Calculator Tools', url: 'tools/calculator/age-calculator.html', icon: 'calendar' },
    { id: 'date-calc', name: 'Date Calculator', description: 'Calculate days between dates', category: 'Calculator Tools', url: 'tools/calculator/date-calculator.html', icon: 'calendar' },
    { id: 'bmi-calc', name: 'BMI Calculator', description: 'Calculate Body Mass Index', category: 'Calculator Tools', url: 'tools/health/bmi-calculator.html', icon: 'activity' },
    { id: 'calorie-counter', name: 'Calorie Counter', description: 'Track daily calories and calculate needs', category: 'Calculator Tools', url: 'tools/health/calorie-counter.html', icon: 'activity' },

    // ========================================
    // Generator Tools (TIER 1 - Highest Priority)
    // ========================================
    { id: 'qr-generator', name: 'QR Code Generator', description: 'Create custom QR codes', category: 'Generators', url: 'tools/generator/qr-code.html', icon: 'grid' },
    { id: 'wifi-qr', name: 'WiFi QR Code Generator', description: 'Share WiFi without password', category: 'Generators', url: 'tools/generator/wifi-qr.html', icon: 'wifi' },
    { id: 'random-number', name: 'Random Number Generator', description: 'Generate random numbers with options', category: 'Generators', url: 'tools/generator/random-number.html', icon: 'shuffle' },

    // ========================================
    // Converter Tools (TIER 1 - Highest Priority)
    // ========================================
    { id: 'unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature, volume', category: 'Converters', url: 'tools/converter/unit-converter.html', icon: 'repeat' },
    { id: 'text-to-speech', name: 'Text to Speech', description: 'Convert text to natural speech', category: 'Converters', url: 'tools/converter/text-to-speech.html', icon: 'volume-2' },

    // ========================================
    // Audio Tools (NEW)
    // ========================================
    { id: 'voice-recorder', name: 'Voice Recorder', description: 'Record audio online', category: 'Audio Tools', url: 'tools/audio/voice-recorder.html', icon: 'mic' },

    // ========================================
    // PDF Tools (TIER 1 & 2 - High Priority)
    // ========================================
    { id: 'pdf-compressor', name: 'PDF Compressor', description: 'Reduce PDF file size', category: 'PDF Tools', url: 'tools/pdf/pdf-compressor.html', icon: 'minimize' },
    { id: 'pdf-merger', name: 'PDF Merger', description: 'Combine multiple PDFs into one', category: 'PDF Tools', url: 'tools/pdf/pdf-merger.html', icon: 'file-plus' },

    // ========================================
    // Scanner Tools (TIER 1 - Highest Priority)
    // ========================================
    { id: 'qr-scanner', name: 'QR Code Scanner', description: 'Scan QR codes with camera or image', category: 'Scanner Tools', url: 'tools/scanner/qr-code-scanner.html', icon: 'camera' },

    // ========================================
    // AI Tools (TIER 1 - Highest Priority)
    // ========================================
    { id: 'resume-builder', name: 'AI Resume Builder', description: 'Create ATS-optimized resumes', category: 'AI Tools', url: 'tools/ai/resume-builder.html', icon: 'file-text' },

    // ========================================
    // Translator Tools (TIER 1 - HIGHEST PRIORITY - 165k/mo)
    // ========================================
    { id: 'translator', name: 'Translator', description: 'Translate text between 100+ languages', category: 'Translator Tools', url: 'tools/translator/translator.html', icon: 'globe' },

    // ========================================
    // Time Tools (TIER 2 - High Priority)
    // ========================================
    { id: 'world-clock', name: 'World Clock', description: 'Check time in major cities worldwide', category: 'Time Tools', url: 'tools/time/world-clock.html', icon: 'clock' },
    { id: 'stopwatch-timer', name: 'Stopwatch & Timer', description: 'Accurate stopwatch and countdown timer', category: 'Time Tools', url: 'tools/time/stopwatch-timer.html', icon: 'watch' },
    { id: 'timezone-converter', name: 'Timezone Converter', description: 'Convert time between different time zones', category: 'Time Tools', url: 'tools/time/timezone-converter.html', icon: 'globe' },

    // ========================================
    // Social Media Tools (NEW - High Demand)
    // ========================================
    { id: 'instagram-caption', name: 'Instagram Caption Generator', description: 'Generate engaging Instagram captions', category: 'Social', url: 'tools/social/instagram-caption.html', icon: 'instagram' },
    { id: 'bio-generator', name: 'Bio Generator', description: 'Create catchy social media bios', category: 'Social', url: 'tools/social/bio-generator.html', icon: 'user' },
    { id: 'youtube-title', name: 'YouTube Title Generator', description: 'Create catchy video titles', category: 'Social', url: 'tools/social/youtube-title-generator.html', icon: 'youtube' },
    { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'Generate relevant hashtags', category: 'Social', url: 'tools/social/hashtag-generator.html', icon: 'hash' },
    { id: 'tiktok-username', name: 'TikTok Username Generator', description: 'Generate unique TikTok usernames', category: 'Social', url: 'tools/social/tiktok-username.html', icon: 'at-sign' },
    { id: 'caption-ideas', name: 'Caption Ideas Generator', description: 'Get creative caption ideas', category: 'Social', url: 'tools/social/caption-ideas.html', icon: 'message-circle' },

    // ========================================
    // Education Tools (NEW)
    // ========================================
    { id: 'flashcard-maker', name: 'Flashcard Maker', description: 'Create digital flashcards for studying', category: 'Education', url: 'tools/education/flashcard-maker.html', icon: 'layers' },
    { id: 'study-planner', name: 'Study Planner', description: 'Plan your study schedule', category: 'Education', url: 'tools/education/study-planner.html', icon: 'calendar' },

    // ========================================
    // Finance Tools (EXPANDED)
    // ========================================
    { id: 'compound-interest', name: 'Compound Interest Calculator', description: 'Calculate investment returns', category: 'Finance', url: 'tools/finance/compound-interest.html', icon: 'trending-up' },
    { id: 'roi-calculator', name: 'ROI Calculator', description: 'Calculate return on investment', category: 'Finance', url: 'tools/finance/roi-calculator.html', icon: 'percent' },
    { id: 'debt-calculator', name: 'Debt Payoff Calculator', description: 'Calculate debt payoff time', category: 'Finance', url: 'tools/finance/debt-calculator.html', icon: 'credit-card' },
    { id: 'mortgage-calculator', name: 'Mortgage Calculator', description: 'Calculate mortgage payments', category: 'Finance', url: 'tools/finance/mortgage-calculator.html', icon: 'home' },
    { id: 'tax-calculator', name: 'Tax Calculator', description: 'Calculate income tax', category: 'Finance', url: 'tools/finance/tax-calculator.html', icon: 'file-text' },

    // ========================================
    // Random Tools (NEW)
    // ========================================
    { id: 'wheel-spinner', name: 'Wheel Spinner', description: 'Random decision maker wheel', category: 'Generators', url: 'tools/random/wheel-spinner.html', icon: 'disc' },
    { id: 'team-generator', name: 'Random Team Generator', description: 'Generate random teams', category: 'Generators', url: 'tools/random/team-generator.html', icon: 'users' },

    // ========================================
    // Productivity Tools (EXPANDED)
    // ========================================
    { id: 'pomodoro-timer', name: 'Pomodoro Timer', description: '25-minute focus sessions', category: 'Productivity', url: 'tools/productivity/pomodoro-timer.html', icon: 'clock' },
    { id: 'meditation-timer', name: 'Meditation Timer', description: 'Peaceful meditation timer', category: 'Productivity', url: 'tools/productivity/meditation-timer.html', icon: 'heart' },
    { id: 'goal-tracker', name: 'Goal Tracker', description: 'Track your goals and progress', category: 'Productivity', url: 'tools/productivity/goal-tracker.html', icon: 'target' },
    { id: 'meeting-cost', name: 'Meeting Cost Calculator', description: 'Calculate meeting costs', category: 'Productivity', url: 'tools/productivity/meeting-cost.html', icon: 'dollar-sign' },
    { id: 'eisenhower-matrix', name: 'Eisenhower Matrix', description: 'Prioritize tasks effectively', category: 'Productivity', url: 'tools/productivity/eisenhower-matrix.html', icon: 'grid' },

    // ========================================
    // Writing Tools (NEW)
    // ========================================
    { id: 'writing-prompt', name: 'Writing Prompt Generator', description: 'Generate creative writing prompts', category: 'Writing', url: 'tools/writing/writing-prompt.html', icon: 'feather' },
    { id: 'rhyme-finder', name: 'Rhyme Finder', description: 'Find rhyming words', category: 'Writing', url: 'tools/writing/rhyme-finder.html', icon: 'book' },

    // ========================================
    // Generator Tools (EXPANDED)
    // ========================================
    { id: 'barcode-generator', name: 'Barcode Generator', description: 'Generate barcodes', category: 'Generators', url: 'tools/generator/barcode-generator.html', icon: 'maximize' },
    { id: 'invoice-generator', name: 'Invoice Generator', description: 'Create professional invoices', category: 'Generators', url: 'tools/generator/invoice-generator.html', icon: 'file-text' },
    { id: 'citation-generator', name: 'Citation Generator', description: 'Generate APA, MLA, Chicago citations', category: 'Generators', url: 'tools/generator/citation-generator.html', icon: 'book-open' },
    { id: 'favicon-generator', name: 'Favicon Generator', description: 'Create favicons for websites', category: 'Generators', url: 'tools/generator/favicon-generator.html', icon: 'image' },
    { id: 'meme-generator', name: 'Meme Generator', description: 'Create memes with custom text', category: 'Generators', url: 'tools/generator/meme-generator.html', icon: 'smile' },
    { id: 'lorem-ipsum', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', category: 'Generators', url: 'tools/generator/lorem-ipsum.html', icon: 'type' },
    { id: 'password-strength', name: 'Password Strength Checker', description: 'Check password strength', category: 'Generators', url: 'tools/generator/password-strength.html', icon: 'shield' },
    { id: 'business-name', name: 'Business Name Generator', description: 'Generate business names', category: 'Generators', url: 'tools/generator/business-name.html', icon: 'briefcase' },
    { id: 'slogan-generator', name: 'Slogan Generator', description: 'Create catchy slogans', category: 'Generators', url: 'tools/generator/slogan-generator.html', icon: 'zap' },
    { id: 'email-to-sms', name: 'Email to SMS Gateway', description: 'Find carrier email gateways', category: 'Generators', url: 'tools/generator/email-to-sms.html', icon: 'smartphone' },

    // ========================================
    // AI Tools (EXPANDED)
    // ========================================

    // ========================================

    // ========================================
    // Health Tools (EXPANDED)
    // ========================================
    { id: 'sleep-calculator', name: 'Sleep Calculator', description: 'Calculate optimal sleep times', category: 'Health', url: 'tools/health/sleep-calculator.html', icon: 'moon' },
    { id: 'water-intake', name: 'Water Intake Calculator', description: 'Calculate daily water needs', category: 'Health', url: 'tools/health/water-intake.html', icon: 'droplet' },
    { id: 'fitness-tracker', name: 'Fitness Tracker', description: 'Track workouts and calories', category: 'Health', url: 'tools/health/fitness-tracker.html', icon: 'activity' },
    { id: 'macro-calculator', name: 'Macro Calculator', description: 'Calculate macronutrients', category: 'Health', url: 'tools/health/macro-calculator.html', icon: 'pie-chart' },
    { id: 'body-fat-calculator', name: 'Body Fat Calculator', description: 'Calculate body fat percentage', category: 'Health', url: 'tools/health/body-fat-calculator.html', icon: 'user-check' },

    // ========================================
    // Developer Tools (NEW)
    // ========================================
    { id: 'regex-tester', name: 'Regex Tester', description: 'Test regular expressions', category: 'Developer', url: 'tools/code/regex-tester.html', icon: 'terminal' },
    { id: 'responsive-tester', name: 'Responsive Design Tester', description: 'Test responsive designs', category: 'Developer', url: 'tools/code/responsive-tester.html', icon: 'smartphone' },
    { id: 'json-diff', name: 'JSON Diff Tool', description: 'Compare JSON files', category: 'Developer', url: 'tools/code/json-diff.html', icon: 'git-branch' },

    // ========================================
    // SEO Tools (EXPANDED)
    // ========================================
    { id: 'schema-generator', name: 'Schema Markup Generator', description: 'Generate JSON-LD structured data', category: 'SEO Tools', url: 'tools/seo/schema-generator.html', icon: 'code' },
    { id: 'redirect-checker', name: 'Redirect Checker', description: 'Check URL redirects', category: 'SEO Tools', url: 'tools/seo/redirect-checker.html', icon: 'external-link' },

    // ========================================
    // Image Tools (EXPANDED)
    // ========================================

    // ========================================

    // ========================================

    // ========================================
    // Video Tools (NEW)
    // ========================================
    { id: 'thumbnail-generator', name: 'Video Thumbnail Generator', description: 'Create video thumbnails', category: 'Video Tools', url: 'tools/video/thumbnail-generator.html', icon: 'video' },
    { id: 'video-to-gif', name: 'Video to GIF Converter', description: 'Convert videos to GIF', category: 'Video Tools', url: 'tools/converter/video-to-gif.html', icon: 'film' },

    // ========================================
    // Text Tools (EXPANDED)
    // ========================================
    { id: 'grammar-checker', name: 'Grammar Checker', description: 'Check grammar and spelling', category: 'Text Tools', url: 'tools/text/grammar-checker.html', icon: 'check-circle' },
    { id: 'duplicate-finder', name: 'Duplicate Line Finder', description: 'Find duplicate lines in text', category: 'Text Tools', url: 'tools/text/duplicate-finder.html', icon: 'copy' },

    // ========================================
    // Scanner Tools (EXPANDED)
    // ========================================
    { id: 'barcode-scanner', name: 'Barcode Scanner', description: 'Scan barcodes with camera', category: 'Scanner Tools', url: 'tools/scanner/barcode-scanner.html', icon: 'maximize' },

    // ========================================
    // Converter Tools (EXPANDED)
    // ========================================
    { id: 'image-converter', name: 'Image Format Converter', description: 'Convert image formats', category: 'Converters', url: 'tools/converter/image-converter.html', icon: 'image' },

    // ========================================
    // AI TOOLS - PREMIUM (174K+ searches/month)
    // ========================================

    // ========================================

    // ========================================
    // VIDEO TOOLS - PREMIUM (282K+ searches/month)
    // ========================================
    { id: 'video-compressor', name: 'Video Compressor', description: 'Reduce video file size', category: 'Video Tools', url: 'tools/video/video-compressor.html', icon: 'minimize' },
    { id: 'mp4-converter', name: 'MP4 Converter', description: 'Convert videos to MP4', category: 'Video Tools', url: 'tools/video/mp4-converter.html', icon: 'film' },
    { id: 'gif-to-mp4', name: 'GIF to MP4 Converter', description: 'Convert GIF to MP4', category: 'Video Tools', url: 'tools/video/gif-to-mp4.html', icon: 'film' },
    { id: 'mp4-to-gif', name: 'MP4 to GIF Converter', description: 'Convert MP4 to GIF', category: 'Video Tools', url: 'tools/video/mp4-to-gif.html', icon: 'image' },
    { id: 'video-cutter', name: 'Video Cutter', description: 'Cut and trim videos', category: 'Video Tools', url: 'tools/video/video-cutter.html', icon: 'scissors' },
    { id: 'video-merger', name: 'Video Merger', description: 'Merge multiple videos', category: 'Video Tools', url: 'tools/video/video-merger.html', icon: 'layers' },
    { id: 'video-rotator', name: 'Video Rotator', description: 'Rotate videos', category: 'Video Tools', url: 'tools/video/video-rotator.html', icon: 'rotate-cw' },
    { id: 'video-speed', name: 'Video Speed Controller', description: 'Change video playback speed', category: 'Video Tools', url: 'tools/video/video-speed.html', icon: 'zap' },
    { id: 'add-subtitles', name: 'Add Subtitles to Video', description: 'Add subtitles to videos', category: 'Video Tools', url: 'tools/video/add-subtitles.html', icon: 'type' },

    // ========================================
    // AUDIO TOOLS - PREMIUM (255K+ searches/month)
    // ========================================
    { id: 'mp3-converter', name: 'MP3 Converter', description: 'Convert audio to MP3', category: 'Audio Tools', url: 'tools/audio/mp3-converter.html', icon: 'music' },
    { id: 'audio-noise-remover', name: 'Audio Noise Remover', description: 'Remove background noise', category: 'Audio Tools', url: 'tools/audio/audio-noise-remover.html', icon: 'volume-x' },
    { id: 'wav-converter', name: 'WAV Converter', description: 'Convert audio to WAV', category: 'Audio Tools', url: 'tools/audio/wav-converter.html', icon: 'music' },
    { id: 'aac-converter', name: 'AAC Converter', description: 'Convert audio to AAC', category: 'Audio Tools', url: 'tools/audio/aac-converter.html', icon: 'music' },
    { id: 'flac-converter', name: 'FLAC Converter', description: 'Convert audio to FLAC', category: 'Audio Tools', url: 'tools/audio/flac-converter.html', icon: 'music' },
    { id: 'audio-cutter', name: 'Audio Cutter', description: 'Cut and trim audio', category: 'Audio Tools', url: 'tools/audio/audio-cutter.html', icon: 'scissors' },
    { id: 'audio-merger', name: 'Audio Merger', description: 'Merge audio files', category: 'Audio Tools', url: 'tools/audio/audio-merger.html', icon: 'layers' },
    { id: 'audio-trimmer', name: 'Audio Trimmer', description: 'Trim audio files', category: 'Audio Tools', url: 'tools/audio/audio-trimmer.html', icon: 'scissors' },
    { id: 'voice-recorder', name: 'Voice Recorder', description: 'Record voice online', category: 'Audio Tools', url: 'tools/audio/voice-recorder.html', icon: 'mic' },
    { id: 'audio-equalizer', name: 'Audio Equalizer', description: 'Adjust audio frequencies', category: 'Audio Tools', url: 'tools/audio/audio-equalizer.html', icon: 'sliders' },
    { id: 'audio-joiner', name: 'Audio Joiner', description: 'Join audio files', category: 'Audio Tools', url: 'tools/audio/audio-joiner.html', icon: 'link' },

    // ========================================
    // IMAGE CONVERTERS - PREMIUM (145K+ searches/month)
    // ========================================
    { id: 'jpg-to-png', name: 'JPG to PNG Converter', description: 'Convert JPG to PNG', category: 'Image Tools', url: 'tools/image/jpg-to-png.html', icon: 'image' },
    { id: 'png-to-jpg', name: 'PNG to JPG Converter', description: 'Convert PNG to JPG', category: 'Image Tools', url: 'tools/image/png-to-jpg.html', icon: 'image' },
    { id: 'webp-converter', name: 'WebP Converter', description: 'Convert images to WebP', category: 'Image Tools', url: 'tools/image/webp-converter.html', icon: 'image' },

    // ========================================

    // ========================================
    // PDF TOOLS - PREMIUM (545K+ searches/month)
    // ========================================
    { id: 'pdf-to-word', name: 'PDF to Word Converter', description: 'Convert PDF to Word', category: 'PDF Tools', url: 'tools/pdf/pdf-to-word.html', icon: 'file-text' },
    { id: 'word-to-pdf', name: 'Word to PDF Converter', description: 'Convert Word to PDF', category: 'PDF Tools', url: 'tools/pdf/word-to-pdf.html', icon: 'file' },
    { id: 'pdf-to-excel', name: 'PDF to Excel Converter', description: 'Convert PDF to Excel', category: 'PDF Tools', url: 'tools/pdf/pdf-to-excel.html', icon: 'file-text' },
    { id: 'excel-to-pdf', name: 'Excel to PDF Converter', description: 'Convert Excel to PDF', category: 'PDF Tools', url: 'tools/pdf/excel-to-pdf.html', icon: 'file' },
    { id: 'pdf-to-jpg', name: 'PDF to JPG Converter', description: 'Convert PDF to JPG', category: 'PDF Tools', url: 'tools/pdf/pdf-to-jpg.html', icon: 'image' },
    { id: 'jpg-to-pdf', name: 'JPG to PDF Converter', description: 'Convert JPG to PDF', category: 'PDF Tools', url: 'tools/pdf/jpg-to-pdf.html', icon: 'file' },
    { id: 'pdf-editor-premium', name: 'PDF Editor', description: 'Edit PDF files online', category: 'PDF Tools', url: 'tools/pdf/pdf-editor.html', icon: 'edit' },
    { id: 'pdf-splitter', name: 'PDF Splitter', description: 'Split PDF into pages', category: 'PDF Tools', url: 'tools/pdf/pdf-splitter.html', icon: 'scissors' },
    { id: 'pdf-rotator', name: 'PDF Rotator', description: 'Rotate PDF pages', category: 'PDF Tools', url: 'tools/pdf/pdf-rotator.html', icon: 'rotate-cw' },
    { id: 'pdf-watermark-remover', name: 'PDF Watermark Remover', description: 'Remove watermarks from PDF', category: 'PDF Tools', url: 'tools/pdf/pdf-watermark-remover.html', icon: 'droplet' },

    // ========================================
    // IMAGE TOOLS - PREMIUM (425K+ searches/month)
    // ========================================
    { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images online', category: 'Image Tools', url: 'tools/image/image-resizer.html', icon: 'maximize' },
    { id: 'rotate-image', name: 'Rotate Image', description: 'Rotate images online', category: 'Image Tools', url: 'tools/image/rotate-image.html', icon: 'rotate-cw' },
    { id: 'flip-image', name: 'Flip Image', description: 'Flip images horizontally/vertically', category: 'Image Tools', url: 'tools/image/flip-image.html', icon: 'refresh-cw' },

    // ========================================
    // WRITING TOOLS - PREMIUM (720K+ searches/month)
    // ========================================
    { id: 'dictionary', name: 'Word Dictionary', description: 'Look up word definitions and pronunciations', category: 'Writing', url: 'tools/writing/dictionary.html', icon: 'book' },

    { id: 'paraphrasing-tool', name: 'Paraphrasing Tool', description: 'Paraphrase text online', category: 'Writing', url: 'tools/writing/paraphrasing-tool.html', icon: 'refresh-cw' },
    { id: 'article-rewriter', name: 'Article Rewriter', description: 'Rewrite articles online', category: 'Writing', url: 'tools/writing/article-rewriter.html', icon: 'edit' },
    { id: 'plagiarism-checker', name: 'Plagiarism Checker', description: 'Check for plagiarism', category: 'Writing', url: 'tools/writing/plagiarism-checker.html', icon: 'shield' },
    { id: 'word-counter-advanced', name: 'Word Counter', description: 'Count words and characters', category: 'Writing', url: 'tools/writing/word-counter-advanced.html', icon: 'hash' },
    { id: 'sentence-counter', name: 'Sentence Counter', description: 'Count sentences in text', category: 'Writing', url: 'tools/writing/sentence-counter.html', icon: 'list' },
    { id: 'character-counter-advanced', name: 'Character Counter', description: 'Count characters in text', category: 'Writing', url: 'tools/writing/character-counter-advanced.html', icon: 'type' },
    { id: 'essay-writer', name: 'Essay Writer', description: 'Write essays with AI help', category: 'Writing', url: 'tools/writing/essay-writer.html', icon: 'file-text' },
    { id: 'summary-generator', name: 'Summary Generator', description: 'Generate text summaries', category: 'Writing', url: 'tools/writing/summary-generator.html', icon: 'align-left' },

    // ========================================
    // PRODUCTIVITY TOOLS - PREMIUM (250K+ searches/month)
    // ========================================
    { id: 'screen-recorder', name: 'Screen Recorder', description: 'Record your screen', category: 'Productivity', url: 'tools/productivity/screen-recorder.html', icon: 'video' },
    { id: 'webcam-recorder', name: 'Webcam Recorder', description: 'Record from webcam', category: 'Productivity', url: 'tools/productivity/webcam-recorder.html', icon: 'camera' },
    { id: 'screenshot-tool', name: 'Screenshot Tool', description: 'Take screenshots', category: 'Productivity', url: 'tools/productivity/screenshot-tool.html', icon: 'camera' },
    { id: 'signature-generator', name: 'Signature Generator', description: 'Create digital signatures', category: 'Productivity', url: 'tools/productivity/signature-generator.html', icon: 'edit-3' },
    { id: 'resume-parser', name: 'Resume Parser', description: 'Parse resume data', category: 'Productivity', url: 'tools/productivity/resume-parser.html', icon: 'file-text' },

    // ========================================
    // DEVELOPER TOOLS - PREMIUM (150K+ searches/month)
    // ========================================
    { id: 'code-formatter', name: 'Code Formatter', description: 'Format code beautifully', category: 'Developer', url: 'tools/code/code-formatter.html', icon: 'code' },
    { id: 'code-minifier', name: 'Code Minifier', description: 'Minify code', category: 'Developer', url: 'tools/code/code-minifier.html', icon: 'minimize' },
    { id: 'api-tester', name: 'API Tester', description: 'Test APIs online', category: 'Developer', url: 'tools/code/api-tester.html', icon: 'server' },
    { id: 'webhook-tester', name: 'Webhook Tester', description: 'Test webhooks', category: 'Developer', url: 'tools/code/webhook-tester.html', icon: 'link' },
    { id: 'cron-generator', name: 'Cron Expression Generator', description: 'Generate cron expressions', category: 'Developer', url: 'tools/code/cron-generator.html', icon: 'clock' },

    // ========================================
    // SOCIAL MEDIA TOOLS - PREMIUM (210K+ searches/month)
    // ========================================
    { id: 'instagram-story-saver', name: 'Instagram Story Saver', description: 'Save Instagram stories', category: 'Social', url: 'tools/social/instagram-story-saver.html', icon: 'instagram' },
    { id: 'tiktok-downloader', name: 'TikTok Video Downloader', description: 'Download TikTok videos', category: 'Social', url: 'tools/social/tiktok-downloader.html', icon: 'download' },
    { id: 'youtube-thumbnail-downloader', name: 'YouTube Thumbnail Downloader', description: 'Download YouTube thumbnails', category: 'Social', url: 'tools/social/youtube-thumbnail-downloader.html', icon: 'image' },

    // ========================================
    // VALIDATOR TOOLS - NEW (238K+ searches/month)
    // ========================================
    { id: 'email-validator', name: 'Email Validator', description: 'Validate email addresses', category: 'Validators', url: 'tools/validator/email-validator.html', icon: 'mail' },
    { id: 'phone-validator', name: 'Phone Number Validator', description: 'Validate phone numbers', category: 'Validators', url: 'tools/validator/phone-validator.html', icon: 'phone' },
    { id: 'url-validator', name: 'URL Validator', description: 'Validate URLs and web addresses', category: 'Validators', url: 'tools/validator/url-validator.html', icon: 'link' },
    { id: 'credit-card-validator', name: 'Credit Card Validator', description: 'Validate credit card numbers', category: 'Validators', url: 'tools/validator/credit-card-validator.html', icon: 'credit-card' },
    { id: 'ip-validator', name: 'IP Address Validator', description: 'Validate IPv4 and IPv6 addresses', category: 'Validators', url: 'tools/validator/ip-validator.html', icon: 'globe' },
    { id: 'json-validator-advanced', name: 'JSON Validator', description: 'Validate JSON syntax', category: 'Validators', url: 'tools/validator/json-validator-advanced.html', icon: 'code' },
    { id: 'password-strength-validator', name: 'Password Strength Validator', description: 'Check password strength', category: 'Validators', url: 'tools/validator/password-strength-validator.html', icon: 'shield' },
    { id: 'iban-validator', name: 'IBAN Validator', description: 'Validate International Bank Account Numbers', category: 'Validators', url: 'tools/validator/iban-validator.html', icon: 'dollar-sign' },

    // ========================================
    // FUN & MISC TOOLS
    // ========================================
    { id: 'emoji-search', name: 'Emoji Search', description: 'Search and copy emojis with HTML codes', category: 'Fun', url: 'tools/fun/emoji-search.html', icon: 'smile' },
];

/**
 * Helper functions to interact with the registry
 */

// Get tools by category
function getToolsByCategory(category) {
    return TOOLS_REGISTRY.filter(tool => tool.category === category);
}

// Get all categories
function getAllCategories() {
    const categories = [...new Set(TOOLS_REGISTRY.map(tool => tool.category))];
    return categories.map(name => ({
        name,
        count: TOOLS_REGISTRY.filter(t => t.category === name).length,
        tools: getToolsByCategory(name)
    }));
}

// Search tools
function searchTools(query) {
    const q = query.toLowerCase();
    return TOOLS_REGISTRY.filter(tool =>
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
    );
}

// Export
window.TOOLS_REGISTRY = TOOLS_REGISTRY;
window.getToolsByCategory = getToolsByCategory;
window.getAllCategories = getAllCategories;
window.searchTools = searchTools;


