const fs = require('fs');

const path = './public/projects.json';
const data = fs.readFileSync(path, 'utf-8');
const projects = JSON.parse(data);

const newProjects = [
  // HTML & CSS
  {
    "id": 6,
    "title": "Penguin Fashion",
    "category": "HTML & CSS",
    "description": "A responsive e-commerce landing page for a fashion brand, built completely with HTML and CSS.",
    "longDescription": "Penguin Fashion is a fully responsive e-commerce landing page built with HTML5 and CSS3. It features a clean, modern design, CSS Grid/Flexbox layouts, and a mobile-first approach to showcase clothing products and accessories.",
    "technologies": ["HTML5", "CSS3", "Responsive Design"],
    "features": ["Responsive E-commerce Layout", "Modern UI", "Fast Loading"],
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Penguin-Fashion",
    "live": "https://pullock4981.github.io/Penguin-Fashion/"
  },
  {
    "id": 7,
    "title": "Biker Zone",
    "category": "HTML & CSS",
    "description": "A dynamic and responsive landing page for a motorcycle shop, utilizing modern CSS features.",
    "longDescription": "Biker Zone is a landing page built using HTML5 and Tailwind CSS/Bootstrap concepts. It features smooth scrolling, interactive hover effects, and a responsive grid system to display various bike models.",
    "technologies": ["HTML5", "CSS3", "Tailwind CSS/Bootstrap"],
    "features": ["Hero Section Carousel", "Responsive Grid Layout", "Interactive UI Elements"],
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Biker-zone",
    "live": "https://pullock4981.github.io/Biker-zone/"
  },
  {
    "id": 8,
    "title": "Tea House",
    "category": "HTML & CSS",
    "description": "An elegant and visually appealing website for a premium tea shop.",
    "longDescription": "Tea House is an elegant, static website crafted with HTML and CSS. It focuses on typography, spacing, and high-quality imagery to provide a premium feel for a tea brand. It includes sections for featured products, client reviews, and a newsletter signup.",
    "technologies": ["HTML5", "CSS3", "CSS Flexbox"],
    "features": ["Elegant Typography", "Flexbox Layouts", "Cross-browser Compatibility"],
    "image": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Tea-House",
    "live": "https://pullock4981.github.io/Tea-House/"
  },
  // JavaScript
  {
    "id": 9,
    "title": "Admin Dashboard",
    "category": "JavaScript",
    "description": "A comprehensive admin dashboard built with React, Vite, and Tailwind CSS. Features interactive charts and data management.",
    "longDescription": "Admin Dashboard is a modern, responsive web application built with JavaScript, React, and Tailwind CSS. It features dynamic routing, smooth animations, and interactive charts for managing and visualizing data efficiently.",
    "technologies": ["JavaScript", "React", "Tailwind CSS", "Recharts"],
    "features": ["Interactive Data Visualization", "Responsive Sidebar", "Dynamic Routing"],
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Admin-dashboard",
    "live": "https://admin-dashboard-react-4981.netlify.app/"
  },
  {
    "id": 10,
    "title": "PH Tube",
    "category": "JavaScript",
    "description": "A video sharing platform clone built using vanilla JavaScript and DOM manipulation.",
    "longDescription": "PH Tube is a YouTube-like application built primarily with Vanilla JavaScript. It fetches data from external APIs to display videos, categories, and view counts. Features include sorting by views, category filtering, and dynamic DOM rendering.",
    "technologies": ["Vanilla JavaScript", "REST API", "HTML5", "CSS3"],
    "features": ["Dynamic Content Rendering", "API Integration", "Sorting & Filtering"],
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/ph-tube",
    "live": "https://ph-tube4981.netlify.app/"
  },
  {
    "id": 11,
    "title": "Job Portal",
    "category": "JavaScript",
    "description": "A comprehensive job portal frontend allowing users to browse and search for jobs.",
    "longDescription": "Job Portal is a functional web interface built using JavaScript, React, and modern CSS. It provides a seamless experience for job seekers to browse available positions, filter by categories, and view detailed job descriptions.",
    "technologies": ["JavaScript", "React Router", "Tailwind CSS"],
    "features": ["Job Filtering", "Detailed Job Views", "Responsive Design"],
    "image": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/Job-portal",
    "live": "https://job-portal-4981.netlify.app/"
  }
];

// merge avoiding duplicates
const existingTitles = projects.map(p => p.title);
newProjects.forEach(np => {
  if (!existingTitles.includes(np.title)) {
    projects.push(np);
  }
});

fs.writeFileSync(path, JSON.stringify(projects, null, 2));
console.log("Updated projects.json successfully!");
