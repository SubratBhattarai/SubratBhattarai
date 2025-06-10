import React, { forwardRef } from 'react';
import '../Experiences/Experiences.css';

const Experiences = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="Experiences"
      style={{ paddingTop: '60px', marginTop: '60px' }}
    >
      <h2>Experiences</h2>

      <div className="Loras">
        <h3>Loras College</h3>

        <div className="experience-block">
          <h4>1. Student Administrative Assistant</h4>
          <p>
            I engage directly with upcoming students to provide personalized support. My responsibilities include responding to inquiries, offering detailed information about the college's programs and facilities, assisting with appointment scheduling, and facilitating connections with relevant campus departments and staff.
          </p>
        </div>

        <div className="experience-block">
          <h4>2. Student Instructor</h4>
          <p>
            I delivered engaging instructional sessions in robotics and programming, provided one-on-one mentoring, and helped design supplemental materials to reinforce classroom instruction and deepen understanding.
          </p>
        </div>

        <div className="experience-block">
          <h4>3. International Student Advisor</h4>
          <p>
            I supported international students by answering inquiries, helping them navigate campus services, and ensuring smooth communication between departments — creating a welcoming and inclusive environment.
          </p>
        </div>

        <div className="experience-block">
          <h4>4. Student Library Worker</h4>
          <p>
            I managed library operations including book check-ins/outs, circulation tracking, re-shelving, and interlibrary loan coordination with other colleges.
          </p>
        </div>
      </div>

      <div className="MachineCreation">
        <h3>Machine Creation <span>Startup</span></h3>

        <div className="experience-block">
          <h4>1. Machine Learning Engineer</h4>
          <p>
            Built a facial recognition system using a custom CNN with PyTorch, Scikit-learn, and OpenCV for real-time performance.
          </p>
        </div>

        <div className="experience-block">
          <h4>2. Game Designer</h4>
          <p>
            Modeled 3D game assets in Blender and programmed interactive mechanics in Unity with C#.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Experiences;
