import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Jumpbar from './components/jumpbar.jsx';
import HomePage from './portfolio/homePage.jsx';
import PortfolioPerformance from './portfolio_performance/portfolio_performance.jsx';
import Footer from './portfolio/footer.jsx';

const App = () => {
  return (
    <div className="app">
      <Jumpbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio-performance" element={<PortfolioPerformance />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
