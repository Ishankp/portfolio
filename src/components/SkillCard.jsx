import React from 'react';
import './SkillCard.css';

const SkillCard = ({ image, name }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={image} alt={name} />
      </div>
      <div className="skill-name">
        {name}
      </div>
    </div>
  );
};

export default SkillCard;
