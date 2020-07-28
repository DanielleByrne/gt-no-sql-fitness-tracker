const db = require("../models");
const express = require("express");
const Workout = require("../models/workout");
// const { Workout } = require("../models");
const router = express.Router();

// get route for all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((allWorkouts) => {
    res.json(allWorkouts);
  });
});

// post route for a new workout

router.post("api/workouts", (req,res)=>{
    Workout.create(req.body).then(newWorkout =>{
        res.json({
            err: false,
            data: newWorkout,
            message: "added a workout"
        })
    })
})

module.exports = router;
