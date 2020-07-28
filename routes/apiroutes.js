const db = require("../models");
const express = require("express");
const router = express.Router();

//route to get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((allWorkouts) => {
    res.json(allWorkouts);
  });
});

module.exports = router;
