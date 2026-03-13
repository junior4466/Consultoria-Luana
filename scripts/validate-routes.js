import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appContent = fs.readFileSync(path.join(__dirname, '..', 'src/App.tsx'), 'utf-8');
const footerContent = fs.readFileSync(path.join(__dirname, '..', 'src/components/Footer.tsx'), 'utf-8');

const routeRegex = /path="([^"]+)"/g;
const linkRegex = /to="([^"]+)"/g;

const routes = new Set();
let match;
while ((match = routeRegex.exec(appContent)) !== null) {
  if (match[1] !== '*') routes.add(match[1]);
}

const links = new Set();
while ((match = linkRegex.exec(footerContent)) !== null) {
  links.add(match[1]);
}

console.log('Validating routes...');
let errors = 0;

links.forEach(link => {
  if (!routes.has(link) && link !== '/') {
    console.error(`Error: Link to "${link}" found in Footer, but no corresponding route in App.tsx`);
    errors++;
  }
});

if (errors === 0) {
  console.log('All footer links have valid routes!');
  process.exit(0);
} else {
  process.exit(1);
}
