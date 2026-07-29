const fs = require('fs');

const pages = [
  { path: 'src/app/ug-credit-transfer/page.tsx', title: 'UG Credit Transfer' },
  { path: 'src/app/pg-credit-transfer/page.tsx', title: 'PG Credit Transfer' },
  { path: 'src/app/diploma-credit-transfer/page.tsx', title: 'Diploma Credit Transfer' },
];

for (const page of pages) {
  if (!fs.existsSync(page.path)) continue;
  let content = fs.readFileSync(page.path, 'utf8');
  
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }

  const regex = /\{\/\* Premium Hero Section \*\/\}[\s\S]*?<\/div>\s*<\/div>/;
  const replacement = `<PageBanner title="${page.title}" />`;
  
  content = content.replace(regex, replacement);
  fs.writeFileSync(page.path, content);
  console.log('Updated ' + page.path);
}

// Gallery
const galleryPath = 'src/app/gallery/page.tsx';
if (fs.existsSync(galleryPath)) {
  let content = fs.readFileSync(galleryPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }
  const galleryRegex = /\{\/\* Unified Hero Section \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const galleryReplacement = `<PageBanner 
        badge="Moments & Memories" 
        title="Gallery" 
        subtitle="Explore beautiful moments, events, and milestones from our vibrant community."
      />`;
  content = content.replace(galleryRegex, galleryReplacement);
  fs.writeFileSync(galleryPath, content);
  console.log('Updated Gallery');
}

// Programs
const programsPath = 'src/app/programs/page.tsx';
if (fs.existsSync(programsPath)) {
  let content = fs.readFileSync(programsPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }
  const programsRegex = /<div className="w-full bg-\[#172A53\] relative overflow-hidden">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const programsReplacement = `<PageBanner 
        badge="Academic Excellence" 
        title="Our Programs" 
        subtitle="Discover a diverse range of undergraduate, postgraduate, and diploma programs tailored to shape your future."
      />`;
  content = content.replace(programsRegex, programsReplacement);
  fs.writeFileSync(programsPath, content);
  console.log('Updated Programs');
}
