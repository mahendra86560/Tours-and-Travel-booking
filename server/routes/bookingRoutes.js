const express = require("express");
const router = express.Router();
const path=require("path");
const {
  createBooking,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const { protect } = require(path.join(__dirname, "../middleware/authmiddleware"));

router.post("/", protect, createBooking);

router.get("/my", protect, getMyBookings);

router.delete("/:id", protect, cancelBooking);

module.exports = router;