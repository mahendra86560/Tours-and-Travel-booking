import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={tour.image} alt={tour.title} />
        <span className="card-price-tag">₹{tour.price}</span>
      </div>

      <div className="card-body">
        <h4>{tour.title}</h4>

        <p className="card-location">
          <span className="pin">📍</span> {tour.location}
        </p>

        <Link to={`/tour/${tour._id}`}>
          <button className="btn-view">
            View Details
            <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
