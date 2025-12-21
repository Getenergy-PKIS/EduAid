const fs = require('fs');
const path = require('path');

// Create a simple colored rectangle as a placeholder
function createPlaceholderImage(width, height, color, outputPath) {
  // Create an SVG with the specified dimensions and color
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" />
</svg>
  `;

  // Write the SVG to the output path
  fs.writeFileSync(outputPath, svg);
  console.log(`Created placeholder image at ${outputPath}`);
}

// Create the projects directory if it doesn't exist
const projectsDir = path.join(__dirname, 'public', 'images', 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Create placeholder images for each project
const projects = [
  { name: 'nigeria-school', color: '#A7D7A9' },
  { name: 'training-webinar', color: '#B9E3BB' },
  { name: 'education-expo', color: '#C5EAC7' },
  { name: 'school-renovation', color: '#D2F0D4' },
  { name: 'teacher-training', color: '#E0F7E2' }
];

projects.forEach(project => {
  const outputPath = path.join(projectsDir, `${project.name}.jpg`);
  createPlaceholderImage(800, 600, project.color, outputPath);
});

console.log('All placeholder images created successfully!');
