const router = require('express').Router()
const User = require('../mongo/user.model')


router.route("/login")
.post((req,res)=>{
   const {username, password} = req.body

   const loginIfuserExists = async () =>{
       User.find({username},(err,docs)=>{
           if(!err)
           {
            console.log(docs[0])

           }
       })
   }
})


