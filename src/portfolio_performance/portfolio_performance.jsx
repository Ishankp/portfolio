import React from 'react';
import '../portfolio/base.css';
import './portfolio_performance.css';
import { getButtonStats } from '../utils/analytics';

const ALL_PROJECTS = [
  { id: 'titans-of-energy', name: 'Titans Of Energy' },
  { id: 'opencv-multithreading', name: 'Opencv Multithreading' },
  { id: 'efficient-energy', name: 'Efficient Energy' },
  { id: 'to-be-continued', name: 'To Be Continued' }
];

const PROJECT_LABELS = ['Live Demo', 'GitHub', 'Skills/Tech'];
const ABOUTME_LABELS = ['Resume', 'LinkedIn', 'GitHub'];

const PortfolioPerformance = () => {
  const rawStats = getButtonStats();
  const statsMap = {};
  rawStats.forEach((item) => {
    statsMap[item.id] = item;
  });
  
  const projectGroups = ALL_PROJECTS.map((project) => {
    const buttons = PROJECT_LABELS.map((label) => {
      const key = `project:${project.id}:${label}`;
      const stat = statsMap[key];
      return {
        label,
        totalClicks: stat ? stat.totalClicks : 0,
        uniqueUsers: stat ? stat.uniqueUsers : 0
      };
    });
    return {
      projectName: project.name,
      buttons
    };
  });

  // Filter for about me stats
  const aboutMeStats = ABOUTME_LABELS.map((label) => {
    const key = `aboutme:${label}`;
    const stat = statsMap[key];
    return {
      label,
      totalClicks: stat ? stat.totalClicks : 0,
      uniqueUsers: stat ? stat.uniqueUsers : 0
    };
  });

  // Calculate max for scaling bars
  const allButtonStats = [
    ...projectGroups.flatMap((pg) => pg.buttons),
    ...aboutMeStats
  ];
  const maxClicks = Math.max(
    1,
    ...allButtonStats.map((b) => b.totalClicks)
  );

  // Calculate total unique visitors (max unique users across all buttons)
  const totalUniqueVisitors = Math.max(...allButtonStats.map((b) => b.uniqueUsers), 0);

  return (
    <div className="section">
      <h2>Portfolio Performance</h2>
      <p>Here is how I am going to know if you guys actually like my work</p>
      
      <div className="performance-stats-header">
        <div className="performance-stat-box">
          <div className="performance-stat-label">Total Unique Visitors</div>
          <div className="performance-stat-value">{totalUniqueVisitors}</div>
        </div>
      </div>
      
      {/* About Me Section */}
      <div className="performance-projects">
        <div className="performance-project-group">
          <h3 className="performance-project-title">About Me</h3>
          <div className="performance-grid">
            {aboutMeStats.map((btn, idx) => (
              <div key={idx} className="performance-card">
                <div className="performance-header">
                  <div className="performance-label">{btn.label}</div>
                </div>
                <div className="performance-stats">
                  <span>Total clicks: {btn.totalClicks}</span>
                  <span>Unique users: {btn.uniqueUsers}</span>
                </div>
                <div className="performance-bar">
                  <div
                    className="performance-bar-fill"
                    style={{ width: `${(btn.totalClicks / maxClicks) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        {projectGroups.map((group, idx) => (
          <div key={idx} className="performance-project-group">
            <h3 className="performance-project-title">{group.projectName}</h3>
            <div className="performance-grid">
              {group.buttons.map((btn, btnIdx) => (
                <div key={btnIdx} className="performance-card">
                  <div className="performance-header">
                    <div className="performance-label">{btn.label}</div>
                  </div>
                  <div className="performance-stats">
                    <span>Total clicks: {btn.totalClicks}</span>
                    <span>Unique users: {btn.uniqueUsers}</span>
                  </div>
                  <div className="performance-bar">
                    <div
                      className="performance-bar-fill"
                      style={{ width: `${(btn.totalClicks / maxClicks) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPerformance;
