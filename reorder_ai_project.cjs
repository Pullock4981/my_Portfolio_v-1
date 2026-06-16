const fs = require('fs');

const path = './public/projects.json';
const data = fs.readFileSync(path, 'utf-8');
const projects = JSON.parse(data);

// Current order at top:
// 0: Cloth eCommerce
// 1: Phoenix Dev Labs
// 2: materials.store
// 3: AI Assistance Assignment

// We want AI Assistance Assignment to be 2nd (index 1).
const aiAssistanceIndex = projects.findIndex(p => p.title === "AI Assistance Assignment");
if (aiAssistanceIndex > -1) {
    const aiAssistanceProject = projects.splice(aiAssistanceIndex, 1)[0];
    // Insert it at index 1
    projects.splice(1, 0, aiAssistanceProject);
    fs.writeFileSync(path, JSON.stringify(projects, null, 2));
    console.log("Reordered AI Assistance to 2nd position.");
} else {
    console.log("Project not found.");
}
