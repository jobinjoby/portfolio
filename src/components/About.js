import React from 'react';

// About Section Component
// Tell visitors about yourself and your journey
function About() {
  // Data for the about cards
  const aboutCards = [
    {
      icon: 'bi-person-badge',
      title: 'Who I Am',
      description: 'A career changer with a fresh perspective, combining my previous experience with new technical skills to bring unique solutions to software development.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'My Journey',
      description:  'I discovered my passion for coding and committed myself to learning Python full-stack development through dedicated self-study and projects.'
    },
    {
      icon: 'bi-rocket-takeoff',
      title: 'My Goal',
      description: 'To continuously grow as a developer, contribute to meaningful projects, and leverage technology to create impactful solutions that make a difference.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">About Me</h2>

        {/* About Cards Row */}
        <div className="row g-4">
          {/* Loop through each card data and create a card */}
          {aboutCards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className="about-card">
                {/* Card Icon */}
                <i className={`bi ${card.icon} about-icon`}></i>
                
                {/* Card Title */}
                <h4>{card.title}</h4>
                
                {/* Card Description */}
                <p style={{ color: '#b0b0b0' }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional About Text */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <p style={{ fontSize: '1.1rem', color: '#b0b0b0', lineHeight: '1.8' }}>
              I believe that coming from a non-traditional background is my strength. 
              It allows me to approach problems differently and communicate effectively 
              with both technical and non-technical stakeholders. I'm committed to 
              writing clean, maintainable code and constantly improving my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
