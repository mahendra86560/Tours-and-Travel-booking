import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon">✈</span>
        TravelGo
      </Link>

      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/bookings" onClick={() => setOpen(false)}>My Bookings</Link>
        <Link to="/login" className="nav-login" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/register" className="nav-register" onClick={() => setOpen(false)}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
