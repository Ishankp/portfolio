import React from 'react';
import './base.css';
import './skills.css';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  // Sample skills data - replace with your actual skills and icon URLs
  const skills = [
    { name: 'JavaScript', image: '/images.png' },
    { name: 'React', image: '/images.png' },
    { name: 'Node.js', image: '/images.png' },
    { name: 'Python', image: '/images.png' },
    { name: 'HTML', image: '/images.png' },
    { name: 'CSS', image: '/images.png' },
    { name: 'Git', image: '/images.png' },
    { name: 'MongoDB', image: '/images.png' },
    { name: 'SQL', image: '/images.png' },
    { name: 'TypeScript', image: '/images.png' },
    { name: 'Express', image: '/images.png' },
    { name: 'Tailwind CSS', image: '/images.png' },
    { name: 'REST APIs', image: '/images.png' },
    { name: 'Docker', image: '/images.png' },
    { name: 'AWS', image: '/images.png' },
    { name: 'Firebase', image: '/images.png' },
    { name: 'Redux', image: '/images.png' },
    { name: 'Webpack', image: '/images.png' },
    { name: 'Jest', image: '/images.png' },
    { name: 'GraphQL', image: '/images.png' },
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
