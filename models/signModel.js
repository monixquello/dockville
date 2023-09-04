const mongoose = require('mongoose');
const passportlocalmongoose = require('passport-local-mongoose');


const signSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
    },
    lastname:{
        type:String,
        trim:true,
    },
    username:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
    },
    contacts:{
        type:Number,
    },
    NIN_No:{
        type:String,
    },
    password:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
    },
    role:{
        type:String,
    },
});

signSchema.plugin(passportlocalmongoose,{usernameField:'email'});
module.exports = mongoose.model("Sign", signSchema);