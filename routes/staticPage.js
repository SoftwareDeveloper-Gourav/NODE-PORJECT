const express = require('express');
const staticRoute = express.Router();

staticRoute.get('/',(req,res)=>{
   res.render('admin/index');
});


module.exports=staticRoute;

