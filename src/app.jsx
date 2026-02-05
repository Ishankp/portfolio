import React from 'react';
import './app.css';
import Jumpbar from './components/jumpbar.jsx';
import Home from './portfolio/home.jsx';
import Projects from './portfolio/projects.jsx';
import Skills from './portfolio/skills.jsx';
import AboutMe from './portfolio/aboutme.jsx';
import Footer from './portfolio/footer.jsx';

const App = () => {
  return (
    <div className="app">
      <Jumpbar />
      <div id="top">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
