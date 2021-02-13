const router = require('express').Router()
const path = require('path')
const User = require('../mongo/user.model')

router.route("/")
.get((req,res)=>{
    res.sendFile(path.join(__dirname,"../","index.html"))
})
.post((req,res)=>{
    console.log("post has been initiated")
    const {username , password, userID, userPosts} = req.body
    console.log("username: " + username+ " password is: "+password)
    res.redirect("/")
    const user = new User({
        username: username,
        password: password,
        userID: userID,
        userPosts: userPosts
    })
    // user.save((err)=>{
    //     if(!err){
    //         console.log("user saved into DB")
    //     }
    //     else{
    //         console.log("sorry an error occured while saving*************************************")
    //         console.log(err)
    //     }
    // })
    user.save(()=>{console.log("1 user has been added")})
})

module.exports = router;

