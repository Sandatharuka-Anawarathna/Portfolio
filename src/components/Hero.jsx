import React from 'react';
import { Download, Mail, Phone } from 'lucide-react';
import './Hero.css';
import PIC from '../assets/me.jpg'; // This is fine from src/assets

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Sandatharuka.pdf'; // File should be in public folder
    link.download = 'MADHS_Anawarathna_CV.pdf'; // This is the name user sees
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="name-highlight">M A D H S</span>
              <br />
              Anawarathna
            </h1>
            <p className="hero-subtitle">Software Developer in Training Lover</p>
            <p className="hero-description">
              I enjoy building creative solutions using code. I'm learning software development, focusing
              on modern web technologies and making user-friendly designs.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <Download size={20} />
                Download My CV
              </button>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-contact">
              <div className="contact-item">
                <Phone size={18} />
                <span>0770132675</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>sandatharukaanawarathna@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-backdrop"></div>
              <img
                src={PIC}
                alt="M A D H S Anawarathna"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
