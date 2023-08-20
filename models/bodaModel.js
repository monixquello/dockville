const mongoose = require('mongoose');

const bodaSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    gender:{
        type:String
    },
    telephone:{
        type:String
    },
    color:{
        type:String
    },
    NIN_No:{
        type:String
    },
    bodamodel:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    charge:{
        type:Number
    }
});

module.exports = mongoose.model("Boda", bodaSchema);