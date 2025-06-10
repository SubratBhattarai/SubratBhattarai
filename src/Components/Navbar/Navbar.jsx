import '../Navbar/Navbar.css';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Content from '../Content/Content.jsx';
import Projects from '../Projects/Projects.jsx';
import Experiences from '../Experiences/Experiences.jsx';
import Contact from '../Contact/Contact.jsx';

function Navbar() {
  const [showLogo, setShowLogo] = useState(true);

  // Section refs
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      {showLogo && (
        <motion.div
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 2 }}
          onAnimationComplete={() => setShowLogo(false)}
          className="initialLogo"
        >
          <h1>SB</h1>
        </motion.div>
      )}

      {!showLogo && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="hero">
            <div className="logo">
              <h1><a href="https://subratbhattarai.github.io">SB</a></h1>
              <hr />
            </div>
            <ul>
              <li><motion.div onClick={() => scrollTo(introRef)}>Introduction</motion.div></li>
              <li><motion.div onClick={() => scrollTo(projectsRef)}>Projects</motion.div></li>
              <li><motion.div onClick={() => scrollTo(experiencesRef)}>Experiences</motion.div></li>
              <li><motion.div onClick={() => scrollTo(contactRef)}>Contact Me</motion.div></li>
            </ul>
          </div>

          {/* Sections with proper refs */}
          <Content ref={introRef} />
          <Projects ref={projectsRef} />
          <Experiences ref={experiencesRef} />
          <Contact ref={contactRef} />
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
