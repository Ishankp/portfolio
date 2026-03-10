import React from 'react';
import './base.css';
import './aboutme.css';
import SkillCard from '../components/SkillCard';
import { recordButtonClick, SOCIAL_LINKS } from '../utils/analytics';

const AboutMe = () => {
  const socialIcons = {
    resume: '/icons/resume.svg',
    linkedin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  };

  const handleButtonClick = (label, url) => {
    recordButtonClick(`aboutme:${label}`);
    window.open(url, '_blank');
  };

  const socialData = [
    { key: 'resume', ...SOCIAL_LINKS.resume },
    { key: 'linkedin', ...SOCIAL_LINKS.linkedin },
    { key: 'github', ...SOCIAL_LINKS.github }
  ];

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
              Hello, my name is Ishan Patel.
            </p>
            <p>
              I approach projects like research problems. 
              I define metrics, benchmark results, and iterate until 
              I can measure meaningful improvements. I’m particularly 
              interested in systems where performance and real-world constraints matter.
            </p>
            <p>
               Through projects ranging from multithreaded image processing to 
               voice-activated AI systems, I enjoy exploring how different technologies 
               interact to solve practical problems. I’m always looking for opportunities 
               to build systems that are both technically efficient and useful in real-world 
               environments.
            </p>
          </div>
          <div className="aboutme-buttons">
            {socialData.map((social) => (
              <div key={social.key} onClick={() => handleButtonClick(social.label, social.url)}>
                <SkillCard image={socialIcons[social.key]} name={social.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
