// generate-sitemap.js
// A simple Node.js script to generate a sitemap.xml file for your website

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of your website - update this with your actual domain
const BASE_URL = 'https://straighttothepointdarts.co.uk';
// Current date in YYYY-MM-DD format
const TODAY = new Date().toISOString().split('T')[0];

// Define your site's pages and their properties
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/coaching', changefreq: 'weekly', priority: '0.9' },
  { path: '/mydarts', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  // Add additional pages as your site grows
];

// Generate the XML content
function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Write the sitemap to a file
function writeSitemapFile() {
  const xml = generateSitemapXml();
  
  // Path to public directory, assuming standard Vite/Svelte structure
  const publicDir = path.resolve(__dirname, 'public');
  
  // Ensure the directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write the sitemap.xml file
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

// Execute the function
writeSitemapFile();