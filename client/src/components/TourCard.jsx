import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <div className="card">
      <img
        src={tour.image}
        alt={tour.title}
      />

      <div className="card-body">
        <h4>{tour.title}</h4>

        <p>{tour.location}</p>

        <h5>₹{tour.price}</h5>

        <Link to={`/tour/${tour._id}`}>
          <button className="btn btn-primary">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TourCard;