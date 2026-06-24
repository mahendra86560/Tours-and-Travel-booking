require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ================== APP INIT ==================
const app = express();

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

// ================== DB CONNECTION ==================
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});