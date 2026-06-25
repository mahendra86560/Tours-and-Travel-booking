import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to cancel booking");
    }
  };

  if (loading) return <p className="state-msg">Loading your bookings...</p>;

  return (
    <div className="my-bookings-page">
      <h2 className="my-bookings-title">My Bookings</h2>
      <p className="my-bookings-subtitle">
        Manage and track all your upcoming trips
      </p>

      {bookings.length === 0 ? (
        <div className="empty-bookings">
          <p>You haven't booked any tours yet.</p>
          <Link to="/" className="browse-link">
            Browse Tours →
          </Link>
        </div>
      ) : (
        <div className="bookings-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking._id}>
              <div className="booking-img-wrap">
                <img
                  src={booking.tour?.image}
                  alt={booking.tour?.title}
                />
              </div>

              <div className="booking-info">
                <h4>{booking.tour?.title}</h4>
                <p className="booking-location">
                  📍 {booking.tour?.location}
                </p>

                <div className="booking-details-grid">
                  <span><strong>Traveler:</strong> {booking.name}</span>
                  <span><strong>Gender:</strong> {booking.gender}</span>
                  <span><strong>Mobile:</strong> {booking.mobile}</span>
                  <span><strong>Persons:</strong> {booking.persons}</span>
                  <span>
                    <strong>Date:</strong>{" "}
                    {new Date(booking.date).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <button
                className="cancel-btn"
                onClick={() => cancelBooking(booking._id)}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;