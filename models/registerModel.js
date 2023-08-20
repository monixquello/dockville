const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String
    },
    telephone:{
       type:Number
    },
    numberplate:{
        type:String
    },
    vehicletype:{
        type:String,
        
    },
    model:{
        type:String
    },
    color:{
        type:String
    },
    date:{
        type:String
    },

    time:{
        type:String
    },
    parkingtype:{
        type:String
    },
    charge:{
        type:Number
    }
 

})

module.exports = mongoose.model("Register", registerSchema);