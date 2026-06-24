import { useEffect, useState } from "react";
import API from "../api/axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/bookings/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ADD THIS FUNCTION
  const cancelBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Booking cancelled successfully");

      // Refresh bookings list
      setBookings(
        bookings.filter(
          (booking) => booking._id !== id
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to cancel booking");
    }
  };

  return (
   <div className="my-bookings-page">
  <h2 className="my-bookings-title">
    My Bookings
  </h2>

  {bookings.map((booking) => (
    <div
      className="booking-card"
      key={booking._id}
    >
      <div className="booking-info">
        <h4>{booking.tour?.title}</h4>

        <p>
          <strong>Persons:</strong>{" "}
          {booking.persons}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(
            booking.date
          ).toLocaleDateString()}
        </p>
      </div>

      <button
        className="cancel-btn"
        onClick={() =>
          cancelBooking(booking._id)
        }
      >
        Cancel Booking
      </button>
    </div>
  ))}
</div>
  );
}

export default MyBookings;