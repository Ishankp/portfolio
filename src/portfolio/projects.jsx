import React from 'react';
import './base.css';
import './projects.css';
import ProjectCard from '../components/ProjectCard';

const createProjectButtons = (githubUrl) => [
  { label: 'Live Demo', onClick: () => window.open('https://example.com', '_blank') },
  { label: 'GitHub', onClick: () => window.open(githubUrl, '_blank') },
  { label: 'Skills/Tech' }
];

const Projects = () => {
  const projectsData = [
    {
      projectId: 'titans-of-energy',
      image: '/images.png',
      title: 'Titans of energy',
      description: 'A senior design project where we create a pipeline where users can create AI characters. We also included the feature wher users can implement their own models for future scalability',
      skills: ['Python', 'AI/ML', 'Flask', 'React', 'PostgreSQL'],
      github: 'https://github.com/mbruckert/titans-of-energy'
    },
    {
      projectId: 'opencv-multithreading',
      image: '/images.png',
      title: 'OpenCV Multithreading optimization',
      description: 'Taking the OpenCV library and optimizing it for multithreading to improve performance in image processing tasks. This project involved analyzing the existing codebase, identifying bottlenecks, and implementing multithreading techniques to enhance the efficiency of OpenCV operations.',
      skills: ['C++', 'OpenCV', 'Multithreading', 'Performance Optimization'],
      github: 'https://github.com/thawzinmoe5232/Multi-Threading-Image-Processing'
    },
    {
      projectId: 'efficient-energy',
      image: '/images.png',
      title: 'Efficient Energy',
      description: 'This project hepled us win secondplace in the UCF 2024 Hackathon challenge. We created an application using technology stacks unfamiliar to our team at the time. We calculate the amount of solar energy the user can generate with x amount of solar panels and how much they can save based on where they are living',
      skills: ['JavaScript', 'React', 'Node.js', 'Solar Energy API', 'Data Analysis'],
      github: 'https://github.com/jtran6796/Efficient-Energy'
    },
    {
      projectId: 'to-be-continued',
      image: '/images.png',
      title: 'To be continued',
      description: 'Placeholder for future projects. Stay tuned for more updates and exciting work!',
      skills: ['Coming Soon'],
      github: 'https://github.com'
    },
  ];

  const projects = projectsData.map((proj) => ({
    ...proj,
    buttons: createProjectButtons(proj.github)
  }));

  return (
    <div className="section">
      <h2>Projects</h2>
      <p>Wanna see what I've been working on?</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectId={project.projectId}
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
