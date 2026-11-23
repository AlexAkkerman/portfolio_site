import fs from 'fs';

// Read the file
let content = fs.readFileSync('E:/Github/portfolio_site/src/data.ts', 'utf-8').toString();

// Replace HTML div with plain text in alt attributes
// Pattern matches <div dir='auto'>text</div> or <div dir="auto">text</div>
const newContent = content.replace(/<div\s+dir=['"]*\s*auto['"]*>(.*?)<\/div>/g, '$1');

// Write back
fs.writeFileSync('E:/Github/portfolio_site/src/data.ts', newContent, 'utf-8');

console.log('Done - HTML tags replaced with plain text');
