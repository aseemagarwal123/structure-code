

const {validate} = require("./UserModel");
var _ =require('lodash');

const UserService = require('./UserService');

exports.register= async(req,res)=>{
const {error} = validate(req.body);
if (error) return res.status(400).send(error.details[0].message);

let user=await UserService.findone(req.body.email)
if (user) return res.status(400).send("User already registered.");

user=await UserService.saveuser(req.body)
res.send(_.pick(user, ["_id", "name", "email"]));
 
}





