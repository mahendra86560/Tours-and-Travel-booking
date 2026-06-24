const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
    location: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);