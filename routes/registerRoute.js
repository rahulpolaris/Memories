const router = require('express').Router()
const User =  require('../mongo/user.model')
const { v4: uuidv4 } = require('uuid');


router.route("/register")
.post((req,res)=>{
    console.log("register post initiated")
    const  {username, password} = req.body


const addNewUserIfUserNot = async ()=>{

    await  User.find({username},(err,docs)=>{
        if(!err 
            && docs.length!= 0
            ){
            console.log("this user already exists")
            console.log(docs)
            res.redirect("/login")
        }
        else{
            const generatedID = uuidv4()
            const newUser = new User({
                username,
                password,
                userID:  generatedID,
                userPosts: []
          
            })
          
            newUser.save((err,doc)=>{
                if(!err){
                    console.log("new user has beed added")
                    console.log(doc)
                    res.redirect("/users/"+generatedID)
                }
                else{
                    res.redirect("/register")
                    console.log("something went wrong")
                }
            })
        }
    }) 
   }

   addNewUserIfUserNot()



})

module.exports = router