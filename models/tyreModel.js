const mongoose = require("mongoose");

const tyreSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
    },
    telephone:{
        type:Number,
    },
    tyresize:{
     type:String,
    },
    tyremake:{
        type:String,
    },
    model:{
        type:String,
    },
    tyre_service:{
        type:String,
    },
    date:{
        type:String,
    },
    charge:{
        type:Number,
    }
})

module.exports = mongoose.model("Tyre", tyreSchema);
