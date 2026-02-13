import React from 'react';
import './base.css';
import './aboutme.css';
import SkillCard from '../components/SkillCard';

const AboutMe = () => {
  return (
    <div className="section">
      <h2>About Me</h2>
      <p>Wanna peak at who I am?</p>
      <div className="aboutme-content">
        <div className="aboutme-image">
          <img src="/images.png" alt="About Me" />
        </div>
        <div className="aboutme-right">
          <div className="aboutme-text">
            <p>
              Hello, my name is Ishan Patel
            </p>
            <p>
              I approach projects like research problems. I define metrics, benchmark results, 
              and iterate until I can measure meaningful improvements. I’m particularly 
              interested in systems where performance and real-world constraints matter.
            </p>
            <p>
              Paragraph 3
            </p>
          </div>
          <div className="aboutme-buttons">
            <div onClick={() => window.open('/resume.pdf', '_blank')}>
              <SkillCard image="/images.png" name="Resume" />
            </div>
            <div onClick={() => window.open('your-linkedin-link', '_blank')}>
              <SkillCard image="/images.png" name="LinkedIn" />
            </div>
            <div onClick={() => window.open('https://github.com/Ishankp', '_blank')}>
              <SkillCard image="/images.png" name="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
