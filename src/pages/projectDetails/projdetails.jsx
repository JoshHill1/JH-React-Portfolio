import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import projData from '../../data/projData'; 
import './projdetails.css'

function ProjectDetails() {
  let { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projData.find(p => p.id.toString() === projectId);
    setProject(foundProject);
  }, [projectId]); 


  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='projdetailsp'>
      <h1>{project.title}</h1>
      <img src={project.imageSrc} alt={project.title} />
      <p>{project.subtext}</p>
    </div>
  );
}

export default ProjectDetails;
