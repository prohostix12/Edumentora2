const fs = require('fs');
const file = 'src/app/b-tech-credit-transfer/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import PageBanner')) {
  content = content.replace("import Header from '@/components/Header';", "import PageBanner from '@/components/PageBanner';\nimport Header from '@/components/Header';");
}

const bannerRegex = /\{\/\* Premium Hero Section \*\/\}[\s\S]*?<\/div>\s*<\/div>/;
const newBanner = `<PageBanner 
        badge="Engineering Career" 
        title="Take the Next Step in your Engineering Career" 
        subtitle="Don’t let an incomplete B.Tech stop you from achieving your dreams. With Edumentora’s B.Tech Credit Transfer Program, you can resume your studies, complete your degree, and build a successful future."
      />`;

content = content.replace(bannerRegex, newBanner);
content = content.replace('relative z-20 -mt-32 mb-20', 'relative z-20 mb-20 mt-12');
content = content.replace('pb-20 scroll-mt-28', 'pb-20 scroll-mt-28 pt-8');

fs.writeFileSync(file, content);
console.log('Updated b-tech-credit-transfer');
