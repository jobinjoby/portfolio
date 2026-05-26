import React from 'react';

// About Section Component
// Tell visitors about yourself and your journey
function About() {
  // Data for the about cards
  const aboutCards = [
    {
      icon: 'bi-person-badge',
      title: 'Who I Am',
      description:  'A passionate Python Full Stack Developer focused on building responsive, scalable, and user-friendly web applications with modern technologies.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'My Journey',
      description:   'My coding journey started with curiosity and quickly became a passion. Through projects and continuous learning, I developed strong skills in React, Django, and modern web development.'
    },
    {
      icon: 'bi-rocket-takeoff',
      title: 'My Goal',
      description: 'To create impactful digital experiences, grow as a software developer, and contribute to innovative projects that solve real-world problems.'
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
                I enjoy transforming ideas into modern and interactive web
              applications. My focus is on creating clean UI designs,
              scalable backend systems, and smooth user experiences using
              technologies like React, Django, and REST APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
