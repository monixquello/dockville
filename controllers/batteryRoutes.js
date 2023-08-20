const express = require('express');
const Battery = require('../models/batteryModel');


const router = express.Router();


router.get('/battery', (req, res) => {
    res.render('battery.pug');
})

router.get('/regbattery', async (req, res) => {
    try{
        const battery = new Battery(req.body);
        await battery.save(); 
        console.log(req.body);
        res.redirect('/api/battery');
    }
    catch(error){
        res.status(400).render('battery.pug')
        console.log(error);
    }
})

router.get('/batteryList', async (req,res)=>{
    try{
        let items = await Battery.find();
        res.render('batteryList.pug',
        {batteries: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"couldnot get battery list"})
    }
})


module.exports = router;