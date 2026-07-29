const fs = require('fs');
const path = require('path');
const locations = ['alappuzha','ernakulam','idukki','in-kochi','kannur','kasaragod','kollam','kottayam','kozhikode','malappuram','palakkad','pathanamthitta','thiruvananthapuram','thrissur','wayanad'];

for (const loc of locations) {
  const file = 'src/app/b-tech-credit-transfer-' + loc + '/page.tsx';
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('import PageBanner')) {
    content = content.replace('import Header from ', "import PageBanner from '@/components/PageBanner';\nimport Header from ");
  }

  // Find the title div (white banner)
  const titleRegex = /<div className="[^"]*pt-16 pb-8"[^>]*>[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<\/div>/;
  const match = content.match(titleRegex);
  
  if (match) {
    const title = match[1].trim();
    content = content.replace(titleRegex, `<PageBanner title="${title}" badge="Engineering Career" />`);
    fs.writeFileSync(file, content);
    console.log('Updated ' + loc);
  } else {
    // If it doesn't match the white banner, maybe it has no banner or we missed it
    console.log('Skipped ' + loc + ' (no match)');
  }
}
