import { customProjects } from '../data/customProjects.js';

const GITHUB_USERNAME = 'footnote42';

async function fetchGitHubRepo(repoName) {
  const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    // Cache for 1 hour during development, will be build-time in production
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) {
    console.error(`Failed to fetch ${repoName}:`, response.status);
    return null;
  }

  const data = await response.json();
  console.log(`GitHub data for ${repoName}:`, { 
    name: data.name,
    description: data.description, 
    homepage: data.homepage,
    html_url: data.html_url 
  });
  return data;
  
  return response.json();
}

export async function getProjects() {
  const projectKeys = Object.keys(customProjects);
  
  // Fetch all repos in parallel
  const githubDataPromises = projectKeys.map(repoName => fetchGitHubRepo(repoName));
  const githubDataArray = await Promise.all(githubDataPromises);
  
  // Merge custom data with GitHub data
  const mergedProjects = projectKeys.map((repoName, index) => {
    const githubData = githubDataArray[index];
    const customData = customProjects[repoName];
    
    if (!githubData) {
      console.warn(`No GitHub data for ${repoName}, using custom data only`);
    }
    
    return {
      // Use display name if provided, otherwise use GitHub name
      name: customData.displayName || githubData?.name || repoName,
      // Custom fields take priority
      tagline: customData.tagline,
      description: customData.description || githubData?.description || customData.tagline,
      problem: customData.problem,
      obstacles: customData.obstacles,
      image: customData.image,// Use custom image path
      // GitHub data
      topics: githubData?.topics || [],
      githubUrl: githubData?.html_url || `https://github.com/${GITHUB_USERNAME}/${repoName}`,
      homepage: githubData?.homepage || null,
      stars: githubData?.stargazers_count || 0,
      // Custom metadata
      status: customData.status || 'Conceptual',
      featured: customData.featured || false,
      hoverReveal: customData.hoverReveal,
    };
  });
  
  return mergedProjects;
}