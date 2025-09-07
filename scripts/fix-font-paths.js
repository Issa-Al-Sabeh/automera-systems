const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all CSS files in the output directory
const cssFiles = glob.sync('out/**/*.css');

console.log(`Found ${cssFiles.length} CSS files to process`);

cssFiles.forEach(cssFile => {
  try {
    const cssContent = fs.readFileSync(cssFile, 'utf8');
    
    // Replace font paths for GitHub Pages
    const updatedCss = cssContent.replace(
      /url\(\/fonts\//g,
      'url(/automera-systems/fonts/'
    );
    
    // Only write if there were changes
    if (updatedCss !== cssContent) {
      fs.writeFileSync(cssFile, updatedCss);
      console.log(`Updated font paths in ${cssFile}`);
    }
  } catch (error) {
    console.error(`Error processing ${cssFile}:`, error.message);
  }
});

console.log('Font paths updated for GitHub Pages deployment');
