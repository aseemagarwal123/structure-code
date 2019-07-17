const express = require('express');
const {User} = require("./UserModel");
var _ =require('lodash');
var Joi=require('joi')
var bcrypt=require('bcrypt')


exports.findone= async(email)=>{
let user = await User.findOne({email: email})
return user;
}

exports.saveuser=async(req,res)=>{
user=new User(_.pick(req, ["name", "email", "password"]));
const salt=await bcrypt.genSalt(10);
user.password =await bcrypt.hash(user.password, salt);
await user.save();
return user;
}