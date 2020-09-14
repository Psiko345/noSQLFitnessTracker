const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:
        {
            type: Date,
            default: () => new Date()
        },
        exercise:
            [
                {
                    type:
                    {
                        type: String,
                        trim: true,
                        required: "What type of exercise did you do?"
                    },
                    name:
                    {
                        type: String,
                        trim: true,
                        required: "Exercise name?"
                    },
                    duration:
                    {
                        type: String,
                        trim: true,
                        required: "How long did you go for, in minutes?"
                    },
                    weight:
                    {
                        type: Number
                    },
                    reps:
                    {
                        type: Number
                    },
                    sets:
                    {
                        type: Number
                    },
                    distance:
                    {
                        type: Number
                    }
                }
            ]
    },
    {
        toJSON:
        {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;