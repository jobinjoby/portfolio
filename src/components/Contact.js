import React, { useState } from 'react';

// Contact Section Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false });
        }, 5000);
      } else {
        setStatus({ loading: false, success: false, error: true });
      }

    } catch (error) {
      console.log('Error:', error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const contactInfo = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      value: 'jobinjo973@gmail.com',
      link: 'mailto:jobinjo973@gmail.com'
    },
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      value: 'kerala',
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

        <div className="row g-5">
          <div className="col-lg-7">
            <div className="contact-form">
              <h4 className="mb-4">Send Me a Message</h4>

              {/* Success Message */}
              {status.success && (
                <div style={{
                  background: 'linear-gradient(135deg, #1a4731, #155724)',
                  color: '#75f7a7',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '1px solid #75f7a7'
                }}>
                  <i className="bi bi-check-circle me-2"></i>
                  Message sent successfully! I will get back to you soon. 🎉
                </div>
              )}

              {/* Error Message */}
              {status.error && (
                <div style={{
                  background: 'linear-gradient(135deg, #4a1a1a, #721c24)',
                  color: '#f5c6cb',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '1px solid #f5c6cb'
                }}>
                  <i className="bi bi-exclamation-circle me-2"></i>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary-custom mt-3"
                  disabled={status.loading}
                  style={{ opacity: status.loading ? 0.7 : 1 }}
                >
                  {status.loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i>Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <h4 className="mb-4">Contact Information</h4>

            {contactInfo.map((info, index) => (
              <a
                href={info.link}
                className="contact-info-card text-decoration-none"
                key={index}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <i className={`bi ${info.icon} contact-info-icon`}></i>
                <div>
                  <h6 className="mb-1 text-white">{info.title}</h6>
                  <p className="mb-0" style={{ color: '#b0b0b0' }}>{info.value}</p>
                </div>
              </a>
            ))}

            <div className="mt-4 p-4" style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '15px'
            }}>
              <h5>Let's Work Together!</h5>
              <p style={{ color: '#b0b0b0' }}>
                I'm currently available for freelance work and full-time opportunities.
                If you have a project that needs coding or an idea you'd like to discuss,
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
