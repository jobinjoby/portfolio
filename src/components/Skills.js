import React from 'react';

function Skills() {

  const skills = [
    { name: 'Python', icon: 'devicon-python-plain colored', level: 85, isDevicon: true },
    { name: 'Django', icon: 'devicon-django-plain colored', level: 80, isDevicon: true },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 70, isDevicon: true },
    { name: 'React', icon: 'devicon-react-original colored', level: 75, isDevicon: true },
    { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 90, isDevicon: true },
    { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 85, isDevicon: true },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', level: 85, isDevicon: true },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored', level: 75, isDevicon: true },

    { name: 'Git', icon: 'devicon-git-plain colored', level: 75, isDevicon: true },
   { name: 'REST APIs', icon: 'bi-diagram-3', level: 80, isDevicon: false }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <h2 className="section-title text-center mb-5">My Skills</h2>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card text-center p-4">
                
{skill.name === 'REST APIs' ? (
  <i className={`bi ${skill.icon} skill-icon`} style={{ fontSize: '40px' }}></i>
) : skill.isDevicon ? (
  <i className={`${skill.icon} skill-icon`}></i>
) : (
  <i className={`bi ${skill.icon} skill-icon`}></i>
)}
                <h5 className="skill-name mt-3">{skill.name}</h5>

                <div className="skill-progress mt-3">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <small className="text-muted d-block mt-2">
                  {skill.level}%
                </small>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;