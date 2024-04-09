import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// css imported in projects.jsx folder

function ProjectCards({ imageSrc, title, category, subtext, id }) {
  // State for tracking hover status and cursor position
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Event handler for mouse move
  const handleMouseMove = (event) => {
    setCursorPos({
      x: event.clientX,
      y: event.clientY
    });
  };

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="card">
      <Link to={`/projects/${id}`}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="card-image" 
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
      {/* Image preview */}
      {isHovering && (
        <div 
          className="image-preview" 
          style={{ 
            position: 'fixed', 
            left: cursorPos.x, 
            top: cursorPos.y, 
            transform: 'translate(-50%, -50%)' 
          }}
        >
          <img src={imageSrc} alt="Preview" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}

      <div className="card-info">
        <div className="proj-title-category">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-category">{category}</h3>
        </div>
        <p className="card-subtext">{subtext}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
