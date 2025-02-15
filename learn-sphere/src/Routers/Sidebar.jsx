import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li>Assignments</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;