import React from 'react';

// Projects Section Component
// Display your portfolio projects
function Projects() {
  // Array of project data - Update with your actual projects
  const projects = [
    


    
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio website built with React and Bootstrap to showcase my projects and skills.',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      github: '[github.com](https://github.com/yourusername/portfolio)',
      live: '#'
    },
 
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">My Projects</h2>

        {/* Projects Grid */}
        <div className="row g-4">
          {/* Loop through projects and create cards */}
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card">
                {/* Project Image/Icon Placeholder */}
                <div className="project-image">
                  <i className="bi bi-code-square"></i>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  {/* Project Title */}
                  <h4 className="project-title">{project.title}</h4>
                  
                  {/* Project Description */}
                  <p className="project-description">{project.description}</p>
                  
                  {/* Technology Badges */}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span className="tech-badge" key={techIndex}>{tech}</span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="d-flex gap-3">
                    <a 
                      href={project.github} 
                      className="btn btn-outline-custom btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github me-2"></i>Code
                    </a>
                    <a 
                      href={project.live} 
                      className="btn btn-primary-custom btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
