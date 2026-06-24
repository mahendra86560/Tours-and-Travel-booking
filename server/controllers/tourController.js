const Tour = require("../models/Tour");

// Create tour
exports.createTour = async (req, res) => {
  const tour = await Tour.create(req.body);
  res.json(tour);
};

// Get all tours
exports.getTours = async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
};

// Get single tour
exports.getTourById = async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  res.json(tour);
};