const fs = require('fs');

const filesToUpdate = [
    './src/Pages/Projects/Projects.jsx',
    './src/Pages/Projects/ReactProjects.jsx',
    './src/Pages/Projects/HtmlCssProjects.jsx',
    './src/Pages/Projects/JavaScriptProjects.jsx'
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');

    // Change flex-col to flex-col-reverse to make the image appear on top
    content = content.replace(
        /className="flex flex-col bg-\[#1f1f1f\] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition h-full"/g, 
        'className="flex flex-col-reverse bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition h-full"'
    );
    
    fs.writeFileSync(file, content);
    console.log("Updated", file);
});
