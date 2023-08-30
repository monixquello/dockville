const mongoose = require('mongoose');

const batterySchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
    },
    lastname:{
        type:String,
    },
    telephone:{
        type:Number 
    },
    battery_type:{
        type:String,
    },
    battery_size:{
        type:String,
    },
    battery_material:{
        type:String,
    },
    voltage:{
        type:String,
    },
    battery_status:{
        type:String,
    },
    model:{
        type:String,
    },
    date:{
        type:String,
    },
    charge:{
        type:String,
    }

});


module.exports = mongoose.model("Battery", batterySchema);