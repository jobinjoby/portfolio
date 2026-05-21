import React from 'react';

// Projects Section Component
// Display your portfolio projects
function Projects() {
  // Array of project data
  const projects = [
    {
      title: 'Food Delivery Application',
      description:
        'A food delivery web application where users can browse menu items, add items to cart, and place orders. Admin can manage menu items and prices.',
      technologies: ['React', 'Bootstrap', 'Django', 'SQLite'],
      image: 'ott-platform.png',
      github: 'https://github.com/jobinjoby/food-delivery-app',
     
    },
    {
      title: 'OTT Platform',
      description:
        'A responsive OTT streaming platform UI where users can browse movies and web series, view details, search content, and explore different categories.',
      technologies: ['React', 'Bootstrap', 'JavaScript', 'CSS3', 'Django', 'Restapi', 'MySQL'],
      image: '/ott.png',
      github: 'https://github.com/jobinjoby/ott-app',
      
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with React and Bootstrap to showcase my projects, skills, resume, and contact details.',
      technologies: ['React', 'Bootstrap', 'CSS3', 'JavaScript', 'Django', 'Restapi' ],
      image: '/port.png',
      github: 'https://github.com/jobinjoby/portfolio',
      
    }
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
                {/* Project Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-img"
                  />
                </div>

                {/* Project Content */}
                <div className="project-content">
                  {/* Project Title */}
                  <h4 className="project-title">{project.title}</h4>

                  {/* Project Description */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span className="tech-badge" key={techIndex}>
                        {tech}
                      </span>
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