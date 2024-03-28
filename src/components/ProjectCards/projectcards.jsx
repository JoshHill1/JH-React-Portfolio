function ProjectCards({ imageSrc, title, category, subtext }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
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