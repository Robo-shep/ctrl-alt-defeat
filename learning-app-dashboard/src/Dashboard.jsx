import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    completedCourses: 0,
    activeCourses: 0,
    hoursSpent: 0,
    recentActivities: [],
  });

  // Simulate fetching data (you can replace this with an API call)
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setDashboardData({
          completedCourses: 5,
          activeCourses: 3,
          hoursSpent: 120,
          recentActivities: [
            "Completed course on JavaScript Basics",
            "Started new course on React",
            "Spent 2 hours on Advanced CSS",
            "Completed quiz on Node.js",
          ],
        });
      }, 1000); // Simulate a 1-second delay
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <main className="main-content">
        <section className="overview">
          <h2>Overview</h2>
          <div className="cards">
            <div className="card">
              <h3>Completed Courses</h3>
              <p id="completed-courses">{dashboardData.completedCourses}</p>
            </div>
            <div className="card">
              <h3>Active Courses</h3>
              <p id="active-courses">{dashboardData.activeCourses}</p>
            </div>
            <div className="card">
              <h3>Hours Spent</h3>
              <p id="hours-spent">{dashboardData.hoursSpent}</p>
            </div>
          </div>
        </section>
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul id="activity-list">
            {dashboardData.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
