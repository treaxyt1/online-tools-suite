const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://onlinetoolfree.com';
const ROOT_DIR = path.join(__dirname, '../');
const TOOLS_DIR = path.join(ROOT_DIR, 'tools');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            if (file.endsWith('.html')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const tools = getFiles(TOOLS_DIR);
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

tools.forEach(file => {
    const relativePath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const url = `${DOMAIN}/${relativePath}`;
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

sitemap += '\n</urlset>';

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${tools.length + 1} URLs.`);


