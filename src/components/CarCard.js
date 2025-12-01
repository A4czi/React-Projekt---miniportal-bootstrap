export default function CarCard({ title, description }) {
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>
      </div>
    );
  }
  
  