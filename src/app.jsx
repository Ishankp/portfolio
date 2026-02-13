import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './app.css';
import Jumpbar from './components/jumpbar.jsx';
import HomePage from './portfolio/homePage.jsx';
import PortfolioPerformance from './portfolio_performance/portfolio_performance.jsx';
import Footer from './portfolio/footer.jsx';

const App = () => {
  const location = useLocation();
  const showJumpbar = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      {showJumpbar && <Jumpbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio-performance" element={<PortfolioPerformance />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
