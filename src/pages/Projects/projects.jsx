import React, { useState } from 'react';
import './projects.css'

import ProjectCards from '../../components/ProjectCards/projectcards.jsx'
import '../../components/ProjectCards/projectcards.css'

import ProjData from '../../data/projData.jsx'


function Projects() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className='projectsp'>
      <h1>Projects</h1>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('category1')}>Category 1</button>
      <button onClick={() => handleFilterChange('category2')}>Category 2</button>
      <div id='neon-line'></div>
      {/* More buttons */}
      <div className="cards-container">
        {ProjData
          .filter(projCard => filter === 'all' || projCard.category === filter)
          .map(projCard => (
            <ProjectCards
              key={projCard.id}
              imageSrc={projCard.imageSrc}
              title={projCard.title}
              category={projCard.category}
              subtext={projCard.subtext}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;






