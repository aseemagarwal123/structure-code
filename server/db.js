// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nearbuyoff',{ useNewUrlParser: true })
.then((d)=>{console.log('database connected')})
.catch((err)=>{console.log('database error'+err)})