import React from 'react';
import './home.css';
import Typed from 'typed.js';

const Home = () => {
  React.useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: ['Software Developer', 'AI/ML Enthusiast', 'Tech Fanatic'],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      duration: 2000,
      
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Ishan K. Patel</h1>
        <h1 className="typed-text"></h1>
        <h2>Let me show you more about what I can do and who I am</h2>
      </div>
    </div>
  );
};

export default Home;
