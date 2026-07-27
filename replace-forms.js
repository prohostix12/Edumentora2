const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src', 'app');
const popupFile = path.join(__dirname, 'src', 'components', 'PopupForm.tsx');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We only care about replacing the form block inside React components
  // The regex looks for <form ...> ... </form>
  const formRegex = /<form\b[^>]*className="([^"]*)"[^>]*>([\s\S]*?)<\/form>/g;
  
  content = content.replace(formRegex, (match, className) => {
    // If it's the admin logout form, skip it
    if (content.includes('logoutAdmin') && match.includes('action=')) {
      return match;
    }
    // If it's the admin login form, skip it
    if (filePath.includes('admin') && filePath.includes('login')) {
      return match;
    }

    // Determine if it's a grid form
    const isGrid = className.includes('grid');
    
    // For space-y forms, the original form uses className="space-y-6" or similar
    // For grid forms, the original form uses className="grid grid-cols-1 md:grid-cols-2 gap-4" or similar
    
    return `<EnquiryForm className="${className}" isGrid={${isGrid}} />`;
  });

  if (content !== originalContent) {
    // Also, we need to import EnquiryForm at the top if it's not already imported
    if (!content.includes('import EnquiryForm')) {
      const importStatement = `import EnquiryForm from '@/components/EnquiryForm';\n`;
      // Find the last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLastImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
      } else {
        // Find the 'use client' or just put it at top
        if (content.includes("'use client'") || content.includes('"use client"')) {
          const firstLineEnd = content.indexOf('\n');
          content = content.slice(0, firstLineEnd + 1) + importStatement + content.slice(firstLineEnd + 1);
        } else {
          content = importStatement + content;
        }
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      // Don't process the contact page itself since we already converted it manually and it has custom states
      if (fullPath.includes('contact\\page.tsx') || fullPath.includes('contact/page.tsx')) {
        continue;
      }
      processFile(fullPath);
    }
  }
}

walkDir(directory);
processFile(popupFile);
