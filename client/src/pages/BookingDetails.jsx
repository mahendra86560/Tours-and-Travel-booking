import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    mobile: "",
    persons: "",
    date: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login to book a tour.");
      return;
    }

    setLoading(true);
    try {
      await API.post(
        "/bookings",
        { tourId: id, ...form },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/bookings");
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form booking-form" onSubmit={submitHandler}>
        <div className="auth-icon">🎫</div>
        <h2>Book Tour</h2>
        <p className="auth-subtitle">Fill in your details to confirm the booking</p>

        {error && <div className="auth-error">{error}</div>}

        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />

        <label>Gender</label>
        <div className="gender-options">
          {["Male", "Female", "Other"].map((g) => (
            <label key={g} className={`gender-pill ${form.gender === g ? "selected" : ""}`}>
              <input
                type="radio"
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={(e) => updateField("gender", e.target.value)}
                required
              />
              {g}
            </label>
          ))}
        </div>

        <label>Mobile Number</label>
        <input
          type="tel"
          placeholder="9876543210"
          value={form.mobile}
          pattern="[0-9]{10}"
          maxLength={10}
          onChange={(e) => updateField("mobile", e.target.value.replace(/\D/g, ""))}
          required
        />

        <label>Number of Persons</label>
        <input
          type="number"
          placeholder="2"
          min="1"
          value={form.persons}
          onChange={(e) => updateField("persons", e.target.value)}
          required
        />

        <label>Travel Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => updateField("date", e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Confirming..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}

export default Booking;