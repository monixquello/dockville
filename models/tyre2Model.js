const mongoose = require("mongoose");

const tyre2Schema = new mongoose.Schema({
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
    tyretype:{
     type:String,
    },
    tyresize:{
     type:String,
    },
    tyremake:{
        type:String,
    },
    date:{
        type:String,
    },
    charge:{
        type:Number,
    }
})

module.exports = mongoose.model("Tyre2", tyre2Schema);
