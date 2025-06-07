const fs = require('fs');
const path = require('path');

const exts = ['.astro', '.js', '.ts'];
const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    // Replace href="/something" (not already using import.meta.env.BASE_URL)
    .replace(/href="\/(?!\$\{import\.meta\.env\.BASE_URL\})/g, 'href="${import.meta.env.BASE_URL}')
    // Replace src="/something" (not already using import.meta.env.BASE_URL)
    .replace(/src="\/(?!\$\{import\.meta\.env\.BASE_URL\})/g, 'src="${import.meta.env.BASE_URL}');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (exts.includes(path.extname(entry.name))) {
      processFile(fullPath);
    }
  });
}

walk(srcDir);
console.log('Done!');
