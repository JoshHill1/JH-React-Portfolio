import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { Link } from 'react-router-dom';

import './featproj.css'

function FeatProj({ projData }) {
  const featuredProjects = projData.filter(project => project.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  // Go directly to x project
  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Current project to display
  const currentProject = featuredProjects[currentIndex];

  return (
    <div id="whole-featured-projects-section">
      <div className="featured feat-text">
        <h2>Featured Projects</h2>
        <div id="feat-text-grouped">
          <h3>{currentProject.title}</h3>
          <h4>{currentProject.category}</h4>
        </div>
        <p>{currentProject.subtext}</p>
        <Link to={`/projects/${currentProject.id }`} className='my-work-btn'><button>More about this project</button></Link>
      </div>
      <div className="featured feat-carousel">
        <IoIosArrowBack onClick={previousProject} className='arrow arrow-left'/>
        <img src={currentProject.imageSrc} alt={currentProject.title} />
        <IoIosArrowForward onClick={nextProject} className='arrow arrow-right'/>
        <div className="indicators">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`indicator ${currentIndex === index ? 'indicator-inactive' : ''}`}
              aria-label={`Go to project ${index + 1}`} >
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatProj;
