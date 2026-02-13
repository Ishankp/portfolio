import React, { useState } from 'react';
import './ProjectCard.css';
import SkillCard from './SkillCard';

const ProjectCard = ({ image, title, description, buttons, skills }) => {
  const [showSkills, setShowSkills] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
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
                image="/images.png" 
                name={skill}
              />
            ))}
          </div>
        ) : (
          <p className="project-description">{description}</p>
        )}
      </div>
      <div className="project-buttons">
        {buttons.map((button, index) => {
          if (button.label === 'Skills/Tech') {
            return (
              <button 
                key={index} 
                className="project-button" 
                onClick={handleSkillsClick}
              >
                {showSkills ? 'Details' : 'Skills/Tech'}
              </button>
            );
          }
          return (
            <button key={index} className="project-button" onClick={button.onClick}>
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
