import React from 'react';
import './home.css';
// Generate random shapes for background
const Home = () => {
  const [circles, setCircles] = React.useState([]);
  React.useEffect(() => {
    const shapes = [
      'circle.svg',
      'heptagon.svg',
      'hexagon.svg',
      'pentagon.svg',
      'square.svg',
      'triangle.svg'
    ];
    const generateBackground = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const count = 12;
      const minRadius = 50;
      const maxRadius = 140;
      const minGap = 18;
      const maxAttempts = 2000;

      const created = [];
      let attempts = 0;

      while (created.length < count && attempts < maxAttempts) {
        attempts += 1;
        const radius = Math.floor(
          Math.random() * (maxRadius - minRadius + 1) + minRadius
        );
        const x = Math.random() * (width - radius * 2) + radius;
        const y = Math.random() * (height - radius * 2) + radius;

        const overlaps = created.some((circle) => {
          const dx = circle.x - x;
          const dy = circle.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < circle.radius + radius + minGap;
        });

        if (!overlaps) {
          created.push({
            x,
            y,
            radius,
            rotation: Math.floor(Math.random() * 360),
            shape: shapes[Math.floor(Math.random() * shapes.length)]
          });
        }
      }

      setCircles(created);
    };

    generateBackground();
    window.addEventListener('resize', generateBackground);
    return () => window.removeEventListener('resize', generateBackground);
  }, []);

  return (
    <div className="home">
      <div className="background-circles" aria-hidden="true">
        {circles.map((circle, index) => (
          <img
            key={`${circle.x}-${circle.y}-${index}`}
            className="background-circle"
            src={`/background/${circle.shape}`}
            alt=""
            style={{
              width: `${circle.radius * 2}px`,
              height: `${circle.radius * 2}px`,
              left: `${circle.x - circle.radius}px`,
              top: `${circle.y - circle.radius}px`,
              transform: `rotate(${circle.rotation}deg)`
            }}
          />
        ))}
      </div>
      <div className="home-content">
        <h1>Hello, World!</h1>
        <p>Welcome to your React portfolio</p>
      </div>
    </div>
  );
};

export default Home;
