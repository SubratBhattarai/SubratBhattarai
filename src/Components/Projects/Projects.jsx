import React, { forwardRef } from 'react';
import './Projects.css';
import { FaDice } from 'react-icons/fa';

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Projects" style={{ minHeight: '100vh', paddingTop: '60px' }}>
      <h2>Projects</h2>
      <ul>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/Facial-Recognition">Facial Recognition</a></li>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/Crime-Analysis">Crime Analysis</a></li>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/Song-Recommender-System">Song Recommender System</a></li>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/Roller-game">Roller Game</a></li>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/ElectricBarrierPoleMechanics">Electric Barrier Pole Mechanics</a></li>
        <li><FaDice /><a target="_blank" rel="noopener noreferrer" href="https://github.com/SubratBhattarai/Employee-Payroll-Project">Employee Payroll</a></li>
      </ul>
    </div>
  );
});

export default Projects;
