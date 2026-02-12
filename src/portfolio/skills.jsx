import React from 'react';
import './base.css';
import './skills.css';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  // Sample skills data - replace with your actual skills and icon URLs
  const skills = [
    { name: 'JavaScript', image: 'https://via.placeholder.com/40' },
    { name: 'React', image: 'https://via.placeholder.com/40' },
    { name: 'Node.js', image: 'https://via.placeholder.com/40' },
    { name: 'Python', image: 'https://via.placeholder.com/40' },
    { name: 'HTML', image: 'https://via.placeholder.com/40' },
    { name: 'CSS', image: 'https://via.placeholder.com/40' },
    { name: 'Git', image: 'https://via.placeholder.com/40' },
    { name: 'MongoDB', image: 'https://via.placeholder.com/40' },
    { name: 'SQL', image: 'https://via.placeholder.com/40' },
    { name: 'TypeScript', image: 'https://via.placeholder.com/40' },
    { name: 'Express', image: 'https://via.placeholder.com/40' },
    { name: 'Tailwind CSS', image: 'https://via.placeholder.com/40' },
    { name: 'REST APIs', image: 'https://via.placeholder.com/40' },
    { name: 'Docker', image: 'https://via.placeholder.com/40' },
    { name: 'AWS', image: 'https://via.placeholder.com/40' },
    { name: 'Firebase', image: 'https://via.placeholder.com/40' },
    { name: 'Redux', image: 'https://via.placeholder.com/40' },
    { name: 'Webpack', image: 'https://via.placeholder.com/40' },
    { name: 'Jest', image: 'https://via.placeholder.com/40' },
    { name: 'GraphQL', image: 'https://via.placeholder.com/40' },
    // Add more skills as needed
  ];

  return (
    <div className="section">
      <h2>Skills</h2>
      <p>Here are skills I can provide</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            image={skill.image}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
