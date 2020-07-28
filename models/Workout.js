const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
        type:{
            type: String,
            // required: "Please select an exercise type",
        },
        name:{
            type: String,
            // required: "Please enter an exercise name",
            trim: true,
        },
        weight:{
            type: Number,
            // required: "Please enter an exercise weight",
            trim: true,
        },
        sets: {
            type:Number,
            // required: "Please enter an amount of sets",
            trim: true,
        },
        reps: {
            type: Number,
            // required: "Please enter a number of reps",
            trim: true,
        },
        duration:{
            type: Number,
            // required: "Please enter a duration",
            trim: true,
        },
        distance: {
            type: Number,
            // required: "Please enter a distance",
            trim: true,
        }
    
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;