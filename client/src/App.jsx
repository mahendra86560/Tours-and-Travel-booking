
import{BrowserRouter,Routes,Route}from"react-router-dom";
import Footer from"./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Booking from "./pages/BookingDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBookings from "./pages/MyBooking";
import Register from "./pages/Register";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
