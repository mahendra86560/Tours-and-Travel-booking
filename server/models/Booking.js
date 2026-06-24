const mongoose = require("mongoose");

const bookingSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      tour: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
      },

      persons: {
        type: Number,
        required: true,
      },

      date: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);