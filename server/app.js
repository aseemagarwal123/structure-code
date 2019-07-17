// app.js
var express = require('express');
var app = express();
var db = require('./db');
UserRoute=require('../Users/UserRoute') 
app.use('/users', UserRoute);
module.exports = app;