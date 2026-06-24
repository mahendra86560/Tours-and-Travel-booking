const Booking = require("../models/Booking");




const createBooking = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("User:", req.user);

    const { tourId, persons, date } = req.body;

    const booking = await Booking.create({
      user: req.user._id,
      tour: tourId,
      persons,
      date,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
// Get My Bookings
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    }).populate("tour");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Cancel Booking
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking ,
  getMyBookings,
  cancelBooking,
};