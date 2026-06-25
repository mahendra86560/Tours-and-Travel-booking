import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/tours/${id}`)
      .then((res) => setTour(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="state-msg">Loading tour...</p>;
  if (!tour) return <p className="state-msg">Tour not found.</p>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-img-wrap">
          <img src={tour.image} alt={tour.title} />
          <span className="detail-price-tag">₹{tour.price}</span>
        </div>

        <div className="detail-body">
          <h2>{tour.title}</h2>
          <p className="detail-location">
            <span className="pin">📍</span> {tour.location}
          </p>

          <p className="detail-description">{tour.description}</p>

          <button className="btn-book" onClick={() => navigate(`/booking/${tour._id}`)}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;