

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>
            <span className="brand-icon">✈</span> TravelGo
          </h3>
          <p>Explore more, worry less. Curated tours across India's best destinations.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/bookings">My Bookings</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;