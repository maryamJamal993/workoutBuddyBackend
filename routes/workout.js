const express =require('express')
const mongoose=require('mongoose')
const Workout=require('../model/workoutModel')
const {getWorkout,getWorkouts,createWorkout,updateWorkout,deleteWorkout}=require('../controllers/workoutController')

const router=express.Router();

//get all workouts
router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)

module.exports=router