const fetchRepos = async () => {
  try {
    let allRepos = [];
    for (let i = 1; i <= 3; i++) {
        const res = await fetch(`https://api.github.com/users/Pullock4981/repos?sort=updated&per_page=100&page=${i}`);
        const repos = await res.json();
        if (repos.length === 0) break;
        allRepos = allRepos.concat(repos);
    }
    
    const result = { htmlCss: [], js: [] };
    
    allRepos.forEach(repo => {
      if (!repo.name) return;
      const info = { 
        name: repo.name, 
        url: repo.html_url, 
        desc: repo.description || '', 
        lang: repo.language,
        homepage: repo.homepage
      };
      
      const isReact = repo.name.toLowerCase().includes('react') || 
                      repo.name.toLowerCase().includes('next') || 
                      repo.name.toLowerCase().includes('portfolio') ||
                      repo.name.toLowerCase().includes('mern') ||
                      repo.name.toLowerCase().includes('medical') ||
                      repo.name.toLowerCase().includes('client') ||
                      repo.name.toLowerCase().includes('server') ||
                      repo.name.toLowerCase().includes('backend') ||
                      repo.name.toLowerCase().includes('frontend') ||
                      repo.topics?.includes('react');
                      
      if (isReact) return;
      
      if (repo.language === 'HTML' || repo.language === 'CSS') {
         result.htmlCss.push(info);
      } else if (repo.language === 'JavaScript' || repo.language === 'TypeScript') {
         result.js.push(info);
      }
    });
    
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(err);
  }
};
fetchRepos();
