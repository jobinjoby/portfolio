import React from 'react';

// Contact Section Component
function Contact() {

  const contactInfo = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      value: 'jobinjo973@gmail.com',
      link: 'mailto:jobinjo973@gmail.com'
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      value: '+91 7510487212', 
      link: 'tel:+917510487212'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      value: 'Kerala, India',
      link: ''
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/jobin-j-494371305',
      link: 'https://www.linkedin.com/in/jobin-j-494371305'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">

            <div className="mb-5">
              <h4 className="mb-3">Let's Work Together!</h4>

              <p style={{ color: '#b0b0b0', fontSize: '1.1rem' }}>
                I'm currently available for freelance work and full-time opportunities.
                If you have a project idea or job opportunity, feel free to contact me.
              </p>
            </div>

            <div className="row g-4">
              {contactInfo.map((info, index) => (
                <div className="col-md-6" key={index}>
                  <a
                    href={info.link}
                    className="contact-info-card text-decoration-none d-flex align-items-center"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                      padding: '25px',
                      borderRadius: '15px',
                      transition: '0.3s ease',
                      display: 'block'
                    }}
                  >
                    <i
                      className={`bi ${info.icon} contact-info-icon`}
                      style={{
                        fontSize: '2rem',
                        color: '#00bfff',
                        marginRight: '20px'
                      }}
                    ></i>

                    <div className="text-start">
                      <h6 className="mb-1 text-white">{info.title}</h6>

                      <p
                        className="mb-0"
                        style={{ color: '#b0b0b0' }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;