import React from 'react';
import { GraduationCap, Code, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    'JavaScript', 'React.js', 'HTML5', 'CSS3', 'Node.js', 'Python',
    'Git', 'Responsive Design', 'UI/UX Design', 'Database Management',
    'MySQL', 'PHP', 'Java', 'C++', 'Software Development'
  ];

  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      description: 'Currently pursuing studies in Computer Science with focus on software development and modern web technologies.'
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      description: 'Proficient in modern web development technologies including React, JavaScript, and responsive design principles.'
    },
    {
      icon: <Target size={24} />,
      title: 'Career Goals',
      description: 'Aspiring to become a full-stack developer and contribute to innovative software solutions in the tech industry.'
    },
    {
      icon: <Award size={24} />,
      title: 'Project Experience',
      description: 'Developed multiple management systems including student, blood donation, restaurant, and pharmacy systems.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
               I'm a motivated individual with a background in IT and experience in sales and customer service. I have strong communication skills and 
               a passion for using technology to solve problems and support organizational growth.
              </p>
              
              <p className="about-description">
                I am a hardworking person with knowledge in IT and some experience in sales and customer service. 
                I enjoy learning new things and want to use my skills to help a company grow.
              </p>

              <div className="skills-section">
                <h3 className="skills-title">Technical Skills</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;