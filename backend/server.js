require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// express app
const app = express()

//middleware
app.use(express.json())

//check incoming requests
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening for requests on port', process.env.PORT)
    })
  })
  .catch((err)=>console.log(err));

