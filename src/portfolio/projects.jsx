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
      description: 'A senior design project at the University of Central Florida (UCF) where we built a modular pipeline for creating and interacting with AI-driven characters. The system supports user-defined models, enabling future scalability and experimentation with different AI architectures.',
      skills: ['Python', 'AI/ML', 'Speech Recognition', 'Natural Language Processing', 'Real-time Systems'],
      github: 'https://github.com/mbruckert/titans-of-energy'
    },
    {
      projectId: 'opencv-multithreading',
      image: '/images.png',
      title: 'Benchmarking Parallel OpenCV Pipelines: Horizontal Strips vs. Quadtree Decomposition',
      description: 'Optimized OpenCV for multithreaded image processing to improve performance. Analyzed the codebase, identified bottlenecks, and implemented parallel processing techniques to enhance efficiency.',
      skills: ['C++', 'OpenCV', 'Multithreading', 'Performance Optimization'],
      github: 'https://github.com/thawzinmoe5232/Multi-Threading-Image-Processing'
    },
    {
      projectId: 'efficient-energy',
      image: '/images.png',
      title: 'Efficient Energy',
      description: 'Participated in a 36-hour hackathon to develop an energy management application. Worked in a 4-person team to design, implement, and present a user-friendly solution, adapting rapidly to unfamiliar tools and APIs to meet the time-sensitive challenge.',
      skills: ['Python', 'StreamLit', 'Solar Energy API', 'Data Analysis'],
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
