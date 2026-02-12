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
          <img src="https://via.placeholder.com/400x500" alt="About Me" />
        </div>
        <div className="aboutme-right">
          <div className="aboutme-text">
            <p>
              paragraph 1
            </p>
            <p>
              Paragraph 2
            </p>
            <p>
              Paragraph 3
            </p>
          </div>
          <div className="aboutme-buttons">
            <div onClick={() => window.open('/resume.pdf', '_blank')}>
              <SkillCard image="https://via.placeholder.com/40" name="Resume" />
            </div>
            <div onClick={() => window.open('your-linkedin-link', '_blank')}>
              <SkillCard image="https://via.placeholder.com/40" name="LinkedIn" />
            </div>
            <div onClick={() => window.open('https://github.com/Ishankp', '_blank')}>
              <SkillCard image="https://via.placeholder.com/40" name="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
