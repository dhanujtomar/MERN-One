const express = require('express');
const Workout = require('../models/workoutModels');
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout }= require('../controllers/workoutControllers');

const router = express.Router();



router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router;