const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, ensureDirSync } = require('fs-extra');
const path = require('path');

// Ensure the public directory exists
ensureDirSync(path.resolve(__dirname, 'public'));

// List of URLs in your site
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'monthly', priority: 0.4 },
  { url: '/services', changefreq: 'monthly', priority: 0.5 },
  // Add more URLs as needed
];

const sitemap = new SitemapStream({ hostname: 'https://www.dottmediatn.com' });

(async () => {
  try {
    const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));
    sitemap.pipe(writeStream);
    urls.forEach(url => sitemap.write(url));
    sitemap.end();
    await streamToPromise(sitemap);
    console.log('Sitemap created successfully!');
  } catch (error) {
    console.log('Error creating sitemap:', error);
  }
})();
