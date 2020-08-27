const express = require('express')
const router = express.Router()
const Response = require('../database/models/response')

const passport = require('../passport')






router.post(
    '/signin',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {

        console.log('logged in', req.message);
        var userInfo = {
            username: req.user.username,
            type: req.user.type
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.send({ user: req.user })
    } 
    // else {
    //     res.send({ user:"no one here!" })
    // }
})

router.post('/logout', (req, res) => {
    console.log(req.user)
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.post('/addresponse', (req, res) => {
  
    if (req.user) {
        console.log(req.user);
    const { no, details,docno,debit,credit,closingbalance,status } = req.body
    const newResponse = new Response({
        no:no,
    details:details,
    docno:docno,
    debit:debit,
    credit:credit,
    closingbalance:closingbalance,
    status:status,
    user:req.user.username

})
newResponse.save((err, savedRes) => {
    if (err) return res.json(err)
    res.send({ msg: 'Added Successfully' })
})
    }
    else {
        res.send({ msg: 'Please Login' })
    }

})

router.get('/responses', (req, res) => {
    if (req.user) {
     console.log(req.user.username);
    Response.find({user:req.user.username}, (err, result) => {
        res.send(result);
        })
    }
    // else {
    //     res.send({ msg: 'Please Login' })
    // }


})



module.exports = router