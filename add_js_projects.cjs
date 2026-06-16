const fs = require('fs');

const path = './public/projects.json';
const data = fs.readFileSync(path, 'utf-8');
const projects = JSON.parse(data);

const newProjects = [
  {
    "id": 16,
    "title": "Alphabet Clash",
    "category": "JavaScript",
    "description": "A simple, browser-based letter-matching game built with HTML, CSS, and JavaScript.",
    "longDescription": "Alphabet Clash is an interactive letter-matching game designed to help users improve their typing speed and keyboard familiarity. It features dynamic letter generation and real-time score tracking.",
    "technologies": ["JavaScript", "HTML", "CSS"],
    "features": ["Real-time Score Tracking", "Dynamic Key Generation", "Interactive UI"],
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Alphabet-Clash",
    "live": ""
  },
  {
    "id": 17,
    "title": "Medi-Aid",
    "category": "JavaScript",
    "description": "A responsive front-end hospital management interface built with HTML, CSS, Tailwind CSS, and JavaScript.",
    "longDescription": "Medi-Aid is a comprehensive hospital management dashboard designed for seamless healthcare administration. Built using vanilla JavaScript and Tailwind CSS, it offers an intuitive UI for managing patient records and hospital resources.",
    "technologies": ["JavaScript", "HTML", "Tailwind CSS"],
    "features": ["Responsive Dashboard", "Patient Management UI", "Modern Design"],
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Hospital-Management_system",
    "live": ""
  }
];

const existingTitles = projects.map(p => p.title);
newProjects.forEach(np => {
  if (!existingTitles.includes(np.title)) {
    projects.push(np);
  }
});

fs.writeFileSync(path, JSON.stringify(projects, null, 2));
console.log("JS projects added successfully!");
