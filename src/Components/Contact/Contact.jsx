import React, { forwardRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../Contact/Contact.css';

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="contact"
      style={{ minHeight: '10vh', paddingTop: '60px'}}
    >
      <h2>Contact Me</h2>
      <p>You can contact me at:</p>

      <div className="contact-icons" style={{ marginTop: '20px' }}>
        <a
          href="mailto:subratbhattarai7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/subrat-bhattarai/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SubratBhattarai"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
});

export default Contact;
