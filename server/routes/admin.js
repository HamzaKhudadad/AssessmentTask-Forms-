const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const Admin = require('../database/models/admin')

const Response = require('../database/models/response')

const passport = require('../passport')

router.post('/adduser', (req, res) => {
    console.log('user signup');
    console.log(req.body);
    const { username, password,fullname,email,type } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.send({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                fullname:fullname,
                email:email,
                type:type

            })
            newUser.save((err, savedUser) => {
                if (err) return res.send({ msg: 'Please Login with valid Credentials' })
                res.send({ msg: 'Added Successfully' })
            })
        }
    })
})










router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})



router.get('/responses', (req, res) => {
    
    Response.find({}, (err, result) => {
        res.send(result);
    })


})


router.post('/approveresponse', (req, res) => {
   console.log(req.user.type);
   
    if (req.user.type=="admin"){
        console.log("insideif");
        
        Response.findOneAndUpdate({no:req.body.no},{status:"approved"},function(error, results) {
            if (error) {
            return next(error);
            }
         
            res.send("Approved");
            });
    }
    else{
        res.send("Please Login with valid Credentials"); 
    }
  


})

router.post('/discardresponse', (req, res) => {
   
    if (req.user.type=="admin"){
    Response.findOneAndUpdate({no:req.body.no},{status:"rejected"},function(error, results) {
        if (error) {
        return next(error);
        }
      
        res.send("Discarded");
        });
    }
    else{
        res.send("Please Login with valid Credentials"); 
    }

})



module.exports = router