const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3500 || process.env.PORT
const path = require('path')
mongoose.connect('mongodb://localhost:27017/photoupload', {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log("Connected to database....")});
const rootRouter = require(path.join(__dirname,"routes","rootroute"))
const userRouter = require(path.join(__dirname,"routes","userRoute"))
const registerRouter = require(path.join(__dirname,"routes","registerRoute"))



app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/",rootRouter)
app.use("/",userRouter)
app.use("/",registerRouter)







app.listen(port,()=>{
    console.log("listening on port " + port + " on " + (new Date).toLocaleDateString() + " at " + (new Date).toLocaleTimeString())
} )

