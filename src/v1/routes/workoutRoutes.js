const express = require('express');

const workoutController = require("../../controllers/workoutController")

const router = express.Router();

router.get("/",workoutController.getAllWorkouts   );

router.get("/:",workoutController.getOneWorkout);

router.post('/',workoutController.createNewWorkout);

router.patch('/',   workoutController.updateOneWorkout);

router.delete('/',workoutController.deleteOneWorkout);

module.exports = router;

