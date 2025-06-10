import React, { forwardRef } from 'react';
import '../Content/Content.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Content = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='Section2' style={{paddingTop: '60px' }}>
      <motion.div className="body">
        <div className="intro">
          <h2>Hi, I am <span>Subrat.</span></h2>
          <p>
            A student of mathematics and computer science at Loras College, I have a strong interest in artificial intelligence and machine learning. I've developed systems for object detection and facial recognition, and I'm now delving deeply into GANs and LSTMs for generative projects. In order to put my skills to use solving actual AI problems, I'm searching for internship opportunities.
          </p>
        </div>
      </motion.div>

      <div className="skills">
        <h2>Skills</h2>
        <li>Python: 3 Years</li>
        <li>PyTorch: 1 Year</li>
        <li>GitHub: 1 Year</li>
        <li>SQL: 1 Year</li>
        <li>React JS: 6 Months</li>

        <div className="links">
          <a href="https://github.com/SubratBhattarai"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/subrat-bhattarai/"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
});

export default Content;
