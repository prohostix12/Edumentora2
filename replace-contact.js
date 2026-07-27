const fs = require('fs');
const path = require('path');

const contactSection = path.join(__dirname, 'src', 'components', 'ContactSection.tsx');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const formRegex = /<form\b[^>]*className="([^"]*)"[^>]*>([\s\S]*?)<\/form>/g;
  
  content = content.replace(formRegex, (match, className) => {
    if (content.includes('logoutAdmin') && match.includes('action=')) {
      return match;
    }
    if (filePath.includes('admin') && filePath.includes('login')) {
      return match;
    }

    const isGrid = className.includes('grid');
    return `<EnquiryForm className="${className}" isGrid={${isGrid}} />`;
  });

  if (content !== originalContent) {
    if (!content.includes('import EnquiryForm')) {
      const importStatement = `import EnquiryForm from '@/components/EnquiryForm';\n`;
      if (content.includes("'use client'") || content.includes('"use client"')) {
        const firstLineEnd = content.indexOf('\n');
        content = content.slice(0, firstLineEnd + 1) + importStatement + content.slice(firstLineEnd + 1);
      } else {
        content = importStatement + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

if (fs.existsSync(contactSection)) {
  processFile(contactSection);
}
