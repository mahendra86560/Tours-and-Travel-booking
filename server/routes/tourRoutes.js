const express = require("express");
const router = express.Router();
const {
  createTour,
  getTours,
  getTourById
} = require("../controllers/tourController");

router.post("/", createTour);
router.get("/", getTours);
router.get("/:id", getTourById);

module.exports = router;