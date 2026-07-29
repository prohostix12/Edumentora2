const fs = require('fs');

// About Us
const aboutPath = 'src/app/about-us/page.tsx';
if (fs.existsSync(aboutPath)) {
  let content = fs.readFileSync(aboutPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }

  const oldHeroStart = `<div className="bg-[#172A53] py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/edumentora%20bg%20image.png')" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">`;
  
  if (content.includes(oldHeroStart)) {
    content = content.replace(oldHeroStart, `<PageBanner>\n        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">`);
    content = content.replace(`</div>\n\n      {/* Stats Section */}`, `</PageBanner>\n\n      {/* Stats Section */}`);
    fs.writeFileSync(aboutPath, content);
    console.log('Updated About Us');
  }
}

// Blog Index
const blogPath = 'src/app/blog/page.tsx';
if (fs.existsSync(blogPath)) {
  let content = fs.readFileSync(blogPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }
  
  const heroRegex = /\{\/\* Hero Section \*\/\}[\s\S]*?<\/div>\s*<\/div>/;
  const newHero = `<PageBanner 
        badge="Latest Insights" 
        title="Our Blog" 
        subtitle="Stay updated with the latest news, guides, and insights about education and career."
      />`;
  if (content.match(heroRegex)) {
    content = content.replace(heroRegex, newHero);
    fs.writeFileSync(blogPath, content);
    console.log('Updated Blog Index');
  }
}

// Apprenticeship
const appPath = 'src/app/apprenticeship-learning-program/page.tsx';
if (fs.existsSync(appPath)) {
  let content = fs.readFileSync(appPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }

  const heroRegex = /\{\/\* Hero Section \*\/\}[\s\S]*?<div className="bg-\[#172A53\] text-white py-20">[\s\S]*?<\/div>\s*<\/div>/;
  const newHero = `<PageBanner 
        badge="Career Growth" 
        title="Apprenticeship Learning Program (ALP)" 
        subtitle="Earn while you learn. Gain real-world experience while pursuing your degree with our specialized ALP."
      />`;
  
  if (content.match(heroRegex)) {
    content = content.replace(heroRegex, newHero);
    fs.writeFileSync(appPath, content);
    console.log('Updated Apprenticeship');
  }
}

// Blog Post [id]
const blogPostPath = 'src/app/blog/[id]/page.tsx';
if (fs.existsSync(blogPostPath)) {
  let content = fs.readFileSync(blogPostPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }
  
  const headerRegex = /<div className="bg-\[#172A53\] py-16 px-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  
  // Notice we use the blog title dynamically
  const newHeader = `<PageBanner title={blog.title} />`;
  if (content.match(headerRegex)) {
    content = content.replace(headerRegex, newHeader);
    fs.writeFileSync(blogPostPath, content);
    console.log('Updated Blog Post [id]');
  }
}

// University [id]
const uniPostPath = 'src/app/universities/[id]/page.tsx';
if (fs.existsSync(uniPostPath)) {
  let content = fs.readFileSync(uniPostPath, 'utf8');
  if (!content.includes('import PageBanner')) {
    content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
  }
  
  const headerRegex = /<div className="bg-\[#172A53\] py-16 px-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  
  // Notice we use the university name dynamically
  const newHeader = `<PageBanner title={university.name} />`;
  if (content.match(headerRegex)) {
    content = content.replace(headerRegex, newHeader);
    fs.writeFileSync(uniPostPath, content);
    console.log('Updated University [id]');
  }
}

