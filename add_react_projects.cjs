const fs = require('fs');

const path = './public/projects.json';
const data = fs.readFileSync(path, 'utf-8');
const projects = JSON.parse(data);

const newProjects = [
  {
    "id": 12,
    "title": "Cloth eCommerce",
    "category": "React.js",
    "description": "A comprehensive full-stack e-commerce application for clothing and apparel.",
    "longDescription": "Cloth eCommerce is a robust full-stack web application built using the MERN stack. It offers a seamless shopping experience for users to browse clothing items, add them to a cart, and securely checkout. The backend handles inventory management and user authentication.",
    "technologies": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    "features": ["Product Catalog & Filtering", "Shopping Cart", "Secure User Authentication"],
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/cloth_ecommerce_frontend",
    "githubS": "https://github.com/Pullock4981/cloth_ecommerce_backend",
    "live": ""
  },
  {
    "id": 13,
    "title": "Phoenix Dev Labs",
    "category": "React.js",
    "description": "A professional agency website with a dedicated backend for managing services and client inquiries.",
    "longDescription": "Phoenix Dev Labs serves as a dynamic agency portfolio and service management platform. Built with React and Node.js, it showcases company services and projects while featuring a secure backend dashboard to handle client messages and service requests.",
    "technologies": ["React", "Node.js", "Express", "MongoDB"],
    "features": ["Dynamic Service Listings", "Admin Dashboard", "Contact Management"],
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/phoenix_dev_labs_frontend",
    "githubS": "https://github.com/Pullock4981/phoenix_dev_labs_backend",
    "live": ""
  },
  {
    "id": 14,
    "title": "ARC eCommerce",
    "category": "React.js",
    "description": "A modern e-commerce platform built with the MERN stack featuring advanced state management.",
    "longDescription": "ARC eCommerce is an advanced online storefront offering full e-commerce capabilities. From browsing products to managing orders, the platform ensures high performance and reliability through its React frontend and scalable Express/MongoDB backend.",
    "technologies": ["React", "Node.js", "Express", "MongoDB", "Redux"],
    "features": ["Inventory Management", "Order Tracking", "User Dashboard"],
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/arc_eCommerce_frontend",
    "githubS": "https://github.com/Pullock4981/arc_eCommerce_backend",
    "live": ""
  },
  {
    "id": 15,
    "title": "AI Assistance Assignment",
    "category": "React.js",
    "description": "An AI-powered code review and assignment assistance tool built with TypeScript and React.",
    "longDescription": "This application leverages AI to provide automated code reviews and assignment feedback. Built with TypeScript for type safety, the React frontend communicates with a Node.js backend to process user submissions and return intelligent, context-aware suggestions.",
    "technologies": ["TypeScript", "React", "Node.js", "Express", "AI Integration"],
    "features": ["Automated Code Review", "Real-time Feedback", "Assignment Tracking"],
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    "githubC": "https://github.com/Pullock4981/aiAssistanceAssignment_frontEnd",
    "githubS": "https://github.com/Pullock4981/aiAssiagmentAssistance_backend",
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
console.log("React projects added successfully!");
