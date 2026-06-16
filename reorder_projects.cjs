const fs = require('fs');

const path = './public/projects.json';
const data = fs.readFileSync(path, 'utf-8');
const projects = JSON.parse(data);

const targetTitles = [
  "Cloth eCommerce",
  "Phoenix Dev Labs",
  "ARC eCommerce",
  "AI Assistance Assignment"
];

const topProjects = projects.filter(p => targetTitles.includes(p.title));
const otherProjects = projects.filter(p => !targetTitles.includes(p.title));

const reordered = [...topProjects, ...otherProjects];

fs.writeFileSync(path, JSON.stringify(reordered, null, 2));
console.log("Projects reordered successfully!");
