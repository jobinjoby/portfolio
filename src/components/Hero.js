import React from 'react';

// Hero Section Component
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side - Text content */}
          <div className="col-lg-6">
            
            {/* Greeting */}
            <p 
              className="text-uppercase mb-3" 
              style={{ color: '#6c63ff', letterSpacing: '3px' }}
            >
              Welcome to my portfolio
            </p>

            {/* Name */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Jobin J</span>
            </h1>

            {/* Role */}
            <h2 className="hero-subtitle">
              Python Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="hero-description">
              I am a passionate Python Full Stack Developer with a strong foundation in building responsive and scalable web applications. I specialize in developing dynamic user interfaces using React and creating robust backend systems with Django.

              As a fresher, I focus on writing clean, efficient, and maintainable code while continuously learning modern technologies and best practices. I enjoy solving real-world problems through technology and building projects that deliver meaningful user experiences.

              I am actively seeking opportunities to contribute, grow, and make an impact as a developer.
            </p>

            {/* Buttons */}
            <div className="hero-buttons d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-primary-custom">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-custom">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links mt-4">
              <a 
                href="https://github.com/jobinjoby" 
                className="social-link me-3" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a 
                href="https://www.linkedin.com/in/jobin-j-494371305" 
                className="social-link me-3" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a 
                href="mailto:jobinjo973@gmail.com"  
                className="social-link"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>

          </div>

          {/* Right side - Image  */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div 
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff 0%, #00d9ff 100%)',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >

              {/* Profile Image */}
              <img 
                src="\profile.jpg"
                alt="Jobin J"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  zIndex: 2
                }}
              />

          

            </div>
          </div>

        </div> {/* row */}
      </div> {/* container */}
    </section>
  );
}

export default Hero;