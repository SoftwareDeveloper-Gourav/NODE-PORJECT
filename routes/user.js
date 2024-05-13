const express = require('express');

const userRoute = express.Router();

userRoute.get('/',(req,res)=>{
res.send('this is working');
});


module.exports = userRoute;