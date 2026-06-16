const fs = require('fs');
const path = require('path');

// 1. Update projects.json
const jsonPath = './public/projects.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

data.forEach(p => {
    if (p.id === 3 || p.title === "PawsNest") {
        p.image = "https://placehold.co/600x400/2b2b2b/white?text=PawsNest+Project";
        delete p.images;
    }
    if (p.id === 4 || p.title === "ForkFlow") {
        p.image = "https://placehold.co/600x400/2b2b2b/white?text=ForkFlow+Project";
        delete p.images;
    }
    if (p.id === 5 || p.title === "HobbyHub") {
        p.image = "https://placehold.co/600x400/2b2b2b/white?text=HobbyHub+Project";
        delete p.images;
    }
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log("Updated projects.json");

// 2. Update the layout in the 4 project pages
const filesToUpdate = [
    './src/Pages/Projects/Projects.jsx',
    './src/Pages/Projects/ReactProjects.jsx',
    './src/Pages/Projects/HtmlCssProjects.jsx',
    './src/Pages/Projects/JavaScriptProjects.jsx'
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');

    // Update the container
    content = content.replace(/className="space-y-12"/g, 'className="grid grid-cols-1 lg:grid-cols-2 gap-8"');
    
    // Update the ProjectCard container
    content = content.replace(/className="flex flex-col-reverse lg:flex-row-reverse bg-\[#1f1f1f\] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"/g, 'className="flex flex-col bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition h-full"');
    
    // Update the text section container
    content = content.replace(/className="lg:w-1\/2 p-6 flex flex-col justify-between"/g, 'className="p-6 flex flex-col justify-between flex-grow"');
    
    // Update the image section container
    content = content.replace(/<div className="lg:w-1\/2 p-6">/g, '<div className="h-64 w-full">');

    fs.writeFileSync(file, content);
    console.log("Updated", file);
});
