import React from 'react';
import Home from './home.jsx';
import Projects from './projects.jsx';
import Skills from './skills.jsx';
import AboutMe from './aboutme.jsx';

const HomePage = () => {
  return (
    <>
      <div id="top">
        <Home />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
