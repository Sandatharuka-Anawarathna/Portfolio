import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '0770132675',
      link: 'tel:0770132675'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sandatharukaanawarathna@gmail.com',
      link: 'mailto:sandatharukaanawarathna@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Sri Lanka',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, label: 'GitHub', url: '#' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: '#' },
    { icon: <Twitter size={24} />, label: 'Twitter', url: '#' }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or just say hello!
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Ready to start your next project or have questions about my work? 
                I'd love to hear from you.
              </p>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    className="contact-item"
                    aria-label={`Contact via ${item.title}`}
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
