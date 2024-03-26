import React, { useState } from 'react';
import './projects.css'

import Card from '../../components/Card/card.jsx'
import '../../components/Card/card.css'

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
          .filter(card => filter === 'all' || card.category === filter)
          .map(card => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              subtext={card.subtext}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;






