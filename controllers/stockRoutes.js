const express = require('express');
const Stock = require('../models/stockModel');

const router = express.Router();


router.get('/stock', (req,res)=>{
    res.render('stock');
})



router.post('/regstock', async (req,res)=>{
    try{
        const stock = new Stock(req.body);
        await stock.save();
        console.log(req.body);
        res.redirect("/api/stockList");
    }
    catch(error){
        res.status(400).render("stock.pug")
        console.log(error); 
    };
});


router.get('/stockList', async (req, res)=>{
    try{
        let items = await Stock.find();
        res.render('stockList.pug',
        {stocks: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"couldnot get stock in database"})
    }
})





module.exports = router;

