import { useEffect, useState } from "react";
import API from "../api/axios";
import TourCard from "../components/TourCard";

function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await API.get("/tours");
      setTours(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Available Tours</h2>
      <h3 className="subtitle ">Handpicked destinations for your next adventure</h3>

      {loading && <p className="state-msg">Loading tours...</p>}

      {!loading && tours.length === 0 && (
        <p className="state-msg">No tours available right now.</p>
      )}

      <div className="tour-grid">
        {tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default Home;