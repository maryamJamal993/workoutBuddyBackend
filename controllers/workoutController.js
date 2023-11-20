const mongoose=require('mongoose')
const Workout=require('../model/workoutModel')

const getWorkouts=async(req,res)=>{
    const work=await Workout.find().sort({createdAt:-1})
    res.status(200).json(work)
}
//***************************************************************************
const getWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const work=await Workout.findById(id)
    if(!work){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(work)
}
//**************************************************************************** 
 const createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    try {
        const work=await Workout.create({title,load,reps})
        res.status(200).json(work)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
//******************************************************************************
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const work=await Workout.findOneAndUpdate({_id:id},{...req.body})
    if(!work){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(work)
}
//********************************************************************************
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const work=await Workout.findOneAndDelete(id)
    if(!work){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(work)
}
//**********************************************************************************

module.exports={getWorkout,getWorkouts,createWorkout,updateWorkout,deleteWorkout}