const express = require('express');
const Boda = require('../models/bodaModel'); 

const router = express.Router();

router.get('/boda', (req, res) => {
    res.render('boda.pug')
});

router.post('/regboda',async (req, res) => {
    try{
        const boda = new Boda(req.body);
        await boda.save(); 
        console.log(req.body);
        res.redirect('/api/bodaList');
    }
    catch(error){
        res.status(400).render('boda.pug')
        console.log(error);
    }
});

router.get('/bodaList', async (req,res)=>{
    try{
        let items = await Boda.find();
        res.render('bodaList.pug',
        {bodas: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"couldnot get boda list"})
    }
})

router.post('/search', async (req, res) => {
    try {
        const searchTerm = req.body.search.toLowerCase();
        const items = await Boda.find({
            $or: [
                { firstname: { $regex: searchTerm, $options: 'i' } },
                { lastname: { $regex: searchTerm, $options: 'i' } },
                { bodamodel: { $regex: searchTerm, $options: 'i' } },
                { date: { $regex: searchTerm, $options: 'i' } },
                { time: { $regex: searchTerm, $options: 'i' } }
            ]
        });

        res.render('bodaList.pug', { bodas: items });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Could not perform search" });
    }
});

// editing 
router.get("/boda/edit/:id", async(req, res)=>{
    try{
        const boda = await Boda.findOne({
            _id:req.params.id
        })
        res.render("editboda", {boda:boda});
    }
    catch(error){
        res.status(400).send("Could not find items in database")
        console.log(error);
    }
})

router.post("/boda/edit", async(req, res) => {
    try{
        await Boda.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/api/bodaList");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})

// deleting
router.post("/bodaList/delete",async (req, res)=>{
    try{
        await Boda.deleteOne({_id:req.body.id});
        res.redirect("/back");

    }
    catch(error){
            res.status(400).send({message: "unable to delete items from database"});
        }
})



module.exports = router;