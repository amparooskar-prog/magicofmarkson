import fs from 'node:fs/promises';
import path from 'node:path';
const files=(await fs.readdir('dist')).filter(f=>f.endsWith('.html'));
const problems=[];
for(const file of files){const html=await fs.readFile(`dist/${file}`,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)problems.push(`${file}: expected one h1`);for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const target=match[1];if(!target||/^(https?:|mailto:|tel:|#)/.test(target))continue;try{await fs.access(path.join('dist',target.split(/[?#]/)[0]));}catch{problems.push(`${file}: missing ${target}`);}}if(!html.includes('name="viewport"'))problems.push(`${file}: missing viewport`);}
for(const file of files){
  const html=await fs.readFile(`dist/${file}`,'utf8');
  if((html.match(/data-contact-widget/g)||[]).length!==1)problems.push(`${file}: expected one floating contact widget`);
  if(!html.includes('aria-controls="quick-contact-panel"')||!html.includes('id="quick-contact-panel"'))problems.push(`${file}: contact disclosure is not connected`);
  if(!html.includes('https://wa.me/6593694164?text='))problems.push(`${file}: missing WhatsApp draft link`);
  if(!html.includes('data-contact-fallback href="contact.html"'))problems.push(`${file}: missing no-script contact fallback`);
}
if(problems.length){console.error(problems.join('\n'));process.exit(1);}console.log(`${files.length} pages: navigation, assets, responsive metadata, headings and floating contact links verified.`);
