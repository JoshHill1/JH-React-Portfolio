function Card({ imageSrc, title, subtext }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-subtext">{subtext}</p>
    </div>
  );
}

export default Card;