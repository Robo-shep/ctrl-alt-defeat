import React from 'react';
import TopBar from '../src/Routers/Topbar.jsx';
import Sidebar from '../src/Routers/Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import Courses from './Courses.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <div className="content-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} /> 
              <Route path="/Courses" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
