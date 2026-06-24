import { useEffect, useState } from "react";
import API from "../api/axios";
import TourCard from "../components/TourCard";


function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await API.get("/tours");
      setTours(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        Available Tours
      </h2>

      <div className="tour-grid">
        {tours.map((tour) => (
          <TourCard
            key={tour._id}
            tour={tour}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;