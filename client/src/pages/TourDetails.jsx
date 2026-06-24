import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);

  useEffect(() => {
    API.get(`/tours/${id}`).then((res) =>
      setTour(res.data)
    );
  }, [id]);

  if (!tour) return <h2>Loading...</h2>;

  return (
    <div className="container py-5">
      <img
        src={tour.image}
        alt={tour.title}
        className="img-fluid mb-4"
      />

      <h2>{tour.title}</h2>

      <p>{tour.description}</p>

      <h4>₹{tour.price}</h4>

      <button
        className="btn btn-success"
        onClick={() =>
          navigate(`/booking/${tour._id}`)
        }
      >
        Book Now
      </button>
    </div>
  );
}

export default TourDetails;