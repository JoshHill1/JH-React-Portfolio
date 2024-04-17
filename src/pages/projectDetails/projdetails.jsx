import React from 'react';
import { useParams } from 'react-router-dom';

import ProjectComponents from './projectdetails-data'; 
import './projdetails.css'

function ProjectDetail() {
  const { id } = useParams();
  const ProjectComponent = ProjectComponents[id];

  if (!ProjectComponent) {
    return <div className='error-page-styling error-height'>
      <h1>Project not found.</h1>
      <p>There was either an error or the page for this project does not exist.</p>
    </div>;
  }

  // Use the component, not the ProjectComponents object
  return <ProjectComponent />;
}

export default ProjectDetail;
