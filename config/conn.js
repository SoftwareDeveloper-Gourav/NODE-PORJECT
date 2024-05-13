const mongoose = require('mongoose');

const dbConn = async()=>{
       mongoose.connect('mongodb://127.0.0.1:27017/project')
       .then(()=>{console.log('DB Connected')});
}

module.exports= dbConn;