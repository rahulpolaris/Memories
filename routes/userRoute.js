const router = require('express').Router()
const path = require('path')



router.route("/users/:userid")
.get((req,res)=>{
    console.log(req.params.userid)
    res.send("<h1>hello user"+req.params.userid+"</h1>")
})


module.exports = router