import React from 'react';
import './base.css';
import './projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      image: '/images.png',
      title: 'Titans of energy',
      description: 'A senior design project where we create a pipeline where users can create AI characters. We also included the feature wher users can implement their own models for future scalability',
      skills: ['Python', 'AI/ML', 'Flask', 'React', 'PostgreSQL'],
      buttons: [
        { label: 'Live Demo', onClick: () => window.open('https://example.com', '_blank') },
        { label: 'GitHub', onClick: () => window.open('https://github.com', '_blank') },
        { label: 'Skills/Tech' }
      ]
    },
    {
      image: '/images.png',
      title: 'OpenCV Multithreading optimization',
      description: 'Taking the OpenCV library and optimizing it for multithreading to improve performance in image processing tasks. This project involved analyzing the existing codebase, identifying bottlenecks, and implementing multithreading techniques to enhance the efficiency of OpenCV operations.',
      skills: ['C++', 'OpenCV', 'Multithreading', 'Performance Optimization'],
      buttons: [
        { label: 'Live Demo', onClick: () => window.open('https://example.com', '_blank') },
        { label: 'GitHub', onClick: () => window.open('https://github.com', '_blank') },
        { label: 'Skills/Tech' }
      ]
    },
    // Add more projects as needed
    {
      image: '/images.png',
      title: 'Efficient Energy',
      description: 'This project hepled us win secondplace in the UCF 2024 Hackathon challenge. We created an application using technology stacks unfamiliar to our team at the time. We calculate the amount of solar energy the user can generate with x amount of solar panels and how much they can save based on where they are living',
      skills: ['JavaScript', 'React', 'Node.js', 'Solar Energy API', 'Data Analysis'],
      buttons: [
        { label: 'Live Demo', onClick: () => window.open('https://example.com', '_blank') },
        { label: 'GitHub', onClick: () => window.open('https://github.com/mbruckert/titans-of-energy', '_blank') },
        { label: 'Skills/Tech' }
      ]
    },
    {
      image: '/images.png',
      title: 'To be continued',
      description: 'Placeholder for future projects. Stay tuned for more updates and exciting work!',
      skills: ['Coming Soon'],
      buttons: [
        { label: 'Live Demo', onClick: () => window.open('https://example.com', '_blank') },
        { label: 'GitHub', onClick: () => window.open('https://github.com', '_blank') },
        { label: 'Skills/Tech' }
      ]
    },
  ];

  return (
    <div className="section">
      <h2>Projects</h2>
      <p>Wanna see what I've been working on?</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            buttons={project.buttons}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
