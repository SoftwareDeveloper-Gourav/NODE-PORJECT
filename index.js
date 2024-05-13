const express = require('express');
const dbConn = require('./config/conn');
const userRoute = require('./routes/user');
const staticRoute = require('./routes/staticPage');


const app = express();
app.set('view engine','ejs');

// dbConn();

app.use('/',staticRoute);
app.use('/user',userRoute);

app.listen(8000,()=>{
    console.log('SERVER START');
});
