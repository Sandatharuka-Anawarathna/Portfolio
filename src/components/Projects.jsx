import React from 'react';
import { ExternalLink, Github, Users, Heart, QrCode, Pill } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description: 'A comprehensive student management system with features for student registration, course management, grade tracking, and attendance monitoring. Built with modern web technologies for educational institutions.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'CSS3'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Users size={24} />
    },
    {
      id: 2,
      title: 'Blood Donation System',
      description: 'A life-saving blood donation management platform that connects donors with recipients. Features include donor registration, blood bank inventory, emergency requests, and donation history tracking.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5'],
      image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Heart size={24} />
    },
    {
      id: 3,
      title: 'QR Code Restaurant Management',
      description: 'Modern restaurant management system with QR code menu ordering, table management, order tracking, and payment processing. Enhances customer experience and streamlines restaurant operations.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'QR Code API', 'CSS3'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <QrCode size={24} />
    },
    {
      id: 4,
      title: 'Pharmacy Management System',
      description: 'Complete pharmacy management solution with inventory control, prescription management, sales tracking, and supplier management. Designed to improve efficiency in pharmaceutical operations.',
      technologies: ['Java', 'MySQL', 'JavaFX', 'JDBC', 'CSS'],
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      icon: <Pill size={24} />
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-content">
          <h2 className="section-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that demonstrate my skills in software development, 
            database management, and creating practical solutions for real-world problems.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View GitHub repository">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} className="project-link" aria-label="View live demo">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;