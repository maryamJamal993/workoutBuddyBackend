const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const workoutRoutes=require('./routes/workout')
//express app
const app=express()
app.use(cors());
mongoose.connect(process.env.mongo_URL).then(()=>{
    app.listen(process.env.PORT,()=>console.log('connected to DB ,listening to port',process.env.PORT))
}).catch((err)=>console.log(err.message))
app.use(express.json())//to make sure that all tha data returned to the api is converted to json 
app.use('/api/workouts',workoutRoutes);//to define the main api,localhost:4000/api/workouts is the main api 
