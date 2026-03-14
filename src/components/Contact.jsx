import React from 'react';
import '../assets/css/style.css';

function Contact() {
  const contactInfo = [
    { icon: 'envelope', label: 'Email', value: 'aparnaa.sanal@gmail.com', href: 'mailto:aparnaa.sanal@gmail.com' },
    { icon: 'telephone', label: 'Phone', value: '+91 8590815069', href: 'tel:+918590815069' },
    { icon: 'geo-alt', label: 'Location', value: 'Kochi, India', href: null },
    { icon: 'github', label: 'GitHub', value: 'github.com/aparnasanal', href: 'https://github.com/aparnasanal' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/aparna-sanal', href: 'https://www.linkedin.com/in/aparna-sanal/' },
  ];

  return (
    <section id="contact">
      <div className="contact-container">

      <div className="contact-left">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-divider">
          <hr />
          <p>Full Stack Developer</p>
          <hr />
        </div>
      </div>

      <div className="contact-grid">
        {contactInfo.map(({ icon, label, value, href }) => (
          <div key={icon} className="contact-item">
            <span className="contact-label">
              <i className={`bi bi-${icon}`} />
              {label}
            </span>
            {href
              ? <a href={href} className="contact-value">{value}</a>
              : <span className="contact-value">{value}</span>
            }
          </div>
        ))}
      </div>

      <a href="#home" className="scroll-down">ˆ</a>

    </div>
    </section>
    
  );
}

export default Contact;