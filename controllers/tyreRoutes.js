const express = require("express");
const Tyre = require("../models/tyreModel");
const Tyre2 = require("../models/tyre2Model");



const router  = express.Router();

router.get("/tyre", (req, res)=>{
    res.render("tyre.pug")
})

router.post("/regtyre", async(req, res)=>{
    try{
        const tyre = new Tyre(req.body);
        await tyre.save();
        console.log(req.body);
        res.redirect("/api/tyre");
    }
    catch(error){
        res.status(400).render("tyre.pug");
        console.log(error);
    }
})

router.get("/tyreList", async (req,res)=>{
    try{
        let items = await Tyre.find();
        res.render("tyreList.pug",
        {tyres: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"Sorry could not get TyreList"})
    }
})


// tyre2

router.get("/tyre2", (req, res)=>{
    res.render("tyre2.pug")
})

router.post("/regtyre2", async(req, res)=>{
    try{
        const tyre2 = new Tyre2(req.body);
        await tyre2.save();
        console.log(req.body);
        res.redirect("/api/tyre2");
    }
    catch(error){
        res.status(400).render("tyre2.pug");
        console.log(error);
    }
})

router.get("/tyre2List", async (req,res)=>{
    try{
        let items = await Tyre2.find();
        res.render("tyre2List.pug",
        {tyres2: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"Sorry could not get TyreList"})
    }
})



module.exports = router;