const express = require('express');
const Battery = require('../models/batteryModel');
// const {ensureLoggedIn} = require('connect-ensure-login');


const router = express.Router();


router.get('/battery', (req, res) => {
    res.render('battery.pug');
})

router.post('/regbattery', async (req, res) => {
    try{
        const battery = new Battery(req.body);
        await battery.save(); 
        console.log(req.body);
        res.redirect('/api/batteryList');
    }
    catch(error){
        res.status(400).render('battery.pug')
        console.log(error);
    }
})



router.get('/batteryList', async (req, res)=>{
    try{
        let items = await Battery.find();
        res.render('batteryList.pug',
        {batteries: items}
        )
        // res.json(items);
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"couldnot get battery list"})
    }
})

router.post('/search', async (req, res) => {
    try {
        const searchTerm = req.body.search.toLowerCase();
        const items = await Battery.find({
            $or: [
                { firstname: { $regex: searchTerm, $options: 'i' } },
                { lastname: { $regex: searchTerm, $options: 'i' } },
                { battery_type: { $regex: searchTerm, $options: 'i' } },
                { battery_status: { $regex: searchTerm, $options: 'i' } },
                { charge: { $regex: searchTerm, $options: 'i' } },
                { date: { $regex: searchTerm, $options: 'i' } },
            ]
        });
        console.log(items);
        res.render('batteryList.pug', { batteries: items });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Could not perform search" });
    }
});

// router for battery
router.get('/batterydash', (req, res) => {
    res.render('batterydash.pug');
})

// updating data
router.get("/battery/edit/:id", async (req, res)=>{
    try{
        const battery = await Battery.findOne({
            _id: req.params.id,
        })
        res.render("editbattery", {Battery:battery});
    }
    catch(error){
        res.status(400).send("Could not find items in database")
        console.log(error);
    }
})

router.post("/battery/edit", async (req, res) => {
    try{
        await Battery.findOneAndUpdate({_id: req.query.id}, req.body);
        res.redirect("/api/batteryList");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})

// DELETING
router.post("/battery/delete",async (req, res)=>{
    try{
        await Battery.deleteOne({_id:req.body.id});
        res.redirect("/back");

    }
    catch(error){
            res.status(400).send({message: "unable to delete items from database"});
        }
})

router.get("/logout", (req, res)=>{
    req.session.destroy(()=>{res.redirect("/api/login")})
    console.log("You have been logged out")
  })




module.exports = router;