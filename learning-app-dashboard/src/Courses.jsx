import React from "react";
import "./Courses.css";

const videos = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  color: `hsl(${Math.random() * 360}, 80%, 70%)`,
  title: `Video Title ${i + 1}`,
  channel: `Channel ${i + 1}`,
  views: `${(Math.random() * 500).toFixed(1)}K views`,
}));

const Courses = () => {
  return (
    <div className="container">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <div className="thumbnail" style={{ backgroundColor: video.color }}></div>
          <div className="video-info">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-channel">{video.channel}</p>
            <p className="video-views">{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
