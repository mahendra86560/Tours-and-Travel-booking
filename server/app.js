require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// ================== APP INIT ==================
const app = express();
// ================= DATABASE CONNECTION ==================

connectDB()

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(express.json());

// ================== ROUTES (INLINE IMPORTS) ==================
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);

// Home route
app.get("/", (req, res) => {
  res.send(" Tours & Travels API Running");
});



// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});