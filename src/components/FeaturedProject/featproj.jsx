import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import './featproj.css'

function FeatProj({ projData }) {
  const featuredProjects = projData.filter(project => project.featured);

  const [currentIndex, setCurrentIndex] = useState(0);

  const NextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const PreviousProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  // Current project to display
  const currentProject = featuredProjects[currentIndex];

  return (
    <div id="whole-featured-projects-section">
      <div className="featured feat-text">
        <h2>Featured Projects</h2>
        <h3>{currentProject.title}</h3>
        <h4>{currentProject.category}</h4>
        <p>{currentProject.subtext}</p>
      </div>
      <div className="featured feat-carousel">
        <IoIosArrowBack onClick={PreviousProject}/>
        <img src={currentProject.imageSrc} alt={currentProject.title} />
        <IoIosArrowForward onClick={NextProject}/>
      </div>
    </div>
  );
}

export default FeatProj;
