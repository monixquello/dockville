const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    itemname:{
        type:String
    },
    description:{
        type:String
    },
    itemtype:{
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