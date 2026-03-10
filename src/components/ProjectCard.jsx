import React, { useState } from 'react';
import './ProjectCard.css';
import SkillCard from './SkillCard';
import { recordButtonClick } from '../utils/analytics';
import { getSkillIcon } from '../utils/skillIcons';

const ProjectCard = ({ image, title, description, buttons, skills, projectId }) => {
  const [showSkills, setShowSkills] = useState(false);

  const handleSkillsClick = () => {
    if (projectId && !showSkills) {
      recordButtonClick(`project:${projectId}:Skills/Tech`);
    }
    setShowSkills(!showSkills);
  };

  const handleButtonClick = (button) => {
    if (projectId) {
      recordButtonClick(`project:${projectId}:${button.label}`);
    }
    if (typeof button.onClick === 'function') {
      button.onClick();
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        {showSkills ? (
          <div className="project-skills">
            {skills && skills.map((skill, index) => (
              <SkillCard 
                key={index}
                image={getSkillIcon(skill)} 
                name={skill}
              />
            ))}
          </div>
        ) : (
          <p className="project-description">{description}</p>
        )}
      </div>
      <div className="project-buttons">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            className="project-button" 
            onClick={button.label === 'Skills/Tech' ? handleSkillsClick : () => handleButtonClick(button)}
          >
            {button.label === 'Skills/Tech' && showSkills ? 'Details' : button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
