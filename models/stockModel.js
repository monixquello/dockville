const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    itemname:{
        type:String
    },
    item_description:{
        type:String
    },
    item_make:{
        type:String
    },
    item_manufacturer:{
        type:String
    },
    quantity:{
        type:Number
    },
    purchase_price:{
        type:Number
    },
    selling_price:{
        type:Number
    },
    purchaseDate:{
        type:Number
    }
})


module.exports = mongoose.model("Stock", stockSchema);