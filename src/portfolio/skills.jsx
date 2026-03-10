import React from 'react';
import './base.css';
import './skills.css';
import SkillCard from '../components/SkillCard';
import { skillIconMap } from '../utils/skillIcons';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: [
        'Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'
      ]
    },
    {
      category: 'Frameworks / Libraries',
      skills: [
        'React', 'Node.js', 'Express.js', 'OpenCV', 'Streamlit', 'Numpy', 'Pandas', 'SciKit-Learn'
      ]
    },
    {
      category: 'Tools / Platforms',
      skills: [
        'Git', 'Linux', 'Postman', 'Visual Studio Code', 'REST APIs', 'Jira'
      ]
    },
    {
      category: 'Databases',
      skills: [
        'MySQL', 'MongoDB'
      ]
    },
    {
      category: 'Methodologies / Practices',
      skills: [
        'Agile', 'Scrum', 'Object-Oriented Programming (OOP)', 'Test-Driven Development (TDD)', 'Unit Testing', 'Performance Benchmarking'
      ]
    },
    {
      category: 'Concepts',
      skills: [
        'Data Structures', 'Algorithms', 'Multithreading', 'Machine Learning', 'Database Design'
      ]
    }
  ];

  return (
    <div className="section">
      <h2>Skills</h2>
      <p>Here are skills I can provide</p>
      <div className="skills-categories">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{categoryData.category}</h3>
            <div className="skills-grid">
              {categoryData.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skillIndex}
                  image={skillIconMap[skill]}
                  name={skill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
