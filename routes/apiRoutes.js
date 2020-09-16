const express = require("express");
const Workout = require("../models/workout")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    app.put("/api/workouts/:id", ({ body, params }, res) =>
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    )

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .sort({ day: -1 })
            .limit(7)
            .then((dbWorkouts) => {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });
}