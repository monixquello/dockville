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

router.post('/search', async (req, res) => {
    try {
        const searchTerm = req.body.search.toLowerCase();
        const items = await Stock.find({
            $or: [
                { itemname: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { itemtype: { $regex: searchTerm, $options: 'i' } },
                { quantity: { $regex: searchTerm, $options: 'i' } },
                { purchase_price: { $regex: searchTerm, $options: 'i' } },
                { selling_price: { $regex: searchTerm, $options: 'i' } }
            ]
        });

        res.render('stockList.pug', { stocks: items });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Could not perform search" });
    }
});




// editing
router.get("/stock/edit/:id", async(req, res)=>{
    try{
        const stock = await Stock.findOne({
            _id:req.params.id
        })
        res.render("editstock", {stock:stock});
    }
    catch(error){
        res.status(400).send("Could not find items in database")
        console.log(error);
    }
})

router.post("/stock/edit", async(req, res) => {
    try{
        await Stock.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/api/stock");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})




module.exports = router;

