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
        res.redirect("/api/tyreList");
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

router.get("/tyredash", (req,res)=>{
    res.render('tyredash.pug')
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
        res.render("tyre2List.pug");
    }
    catch(error){
        res.status(400).render("tyre2.pug");
        console.log(error);
    }
})

router.get("/tyre2List", async (req, res) => {
    try {
        let items = await Tyre2.find();
        res.render("tyre2List.pug", { tyre2s: items }); 
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Sorry could not get TyreList" });
    }
});


// router.get("/tyre2List", async (req,res)=>{
//     try{
//         let items = await Tyre2.find();
//         res.render("tyre2List.pug",
//         {tyres2: items}
//         )
//     }
//     catch(error){
//         console.log(error);
//         return res.status(400).send({message:"Sorry could not get TyreList"})
//     }
// })


// EDITING DATA
router.get("/tyre", async(req, res)=>{
    try{
        let items = await Tyre.find();
        // let itemsOut = await Register.find({status:"in"});
        // let itemsIn = await Register.find({status:"Out"});
        res.render("tyre.pug",
         {  tyres:items
            // registersIn: itemsIn,
            // registersOut: itemsOut
        }
         );
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry could not get parkreport form"});
    }

})


router.get("/tyre/edit/:id", async(req, res)=>{
    try{
        const tyre = await Tyre.findOne({
            _id:req.params.id
        })
        res.render("edittyre", {tyre:tyre});
    }
    catch(error){
        res.status(400).send("Could not find items in database")
        console.log(error);
    }
})

router.post("/tyre/edit", async(req, res) => {
    try{
        await Tyre.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/api/tyre");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})


// deleting
router.post("/tyreList/delete",async (req, res)=>{
    try{
        await Tyre.deleteOne({_id:req.body.id});
        res.redirect("/back");

    }
    catch(error){
            res.status(400).send({message: "unable to delete items from database"});
        }
})


// tyre2
router.get("/tyre2", async(req, res)=>{
    try{
        let items = await Tyre2.find();
        res.render("tyre2.pug",
         {  tyre2s:items
        }
         );
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "Sorry could not get tyre form"});
    }

})


router.get("/tyre2/edit/:id", async(req, res)=>{
    try{
        const tyre2 = await Tyre2.findOne({
            _id:req.params.id
        })
        res.render("edittyre2", {tyre2:tyre2});
    }
    catch(error){
        res.status(400).send("Could not find items in database")
        console.log(error);
    }
})

router.post("/tyre2/edit", async(req, res) => {
    try{
        await Tyre2.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/api/tyre2");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})


// deleting
router.post("/tyre2List/delete",async (req, res)=>{
    try{
        await Tyre.deleteOne({_id:req.body.id});
        res.redirect("/back");

    }
    catch(error){
            res.status(400).send({message: "unable to delete items from database"});
        }
})




module.exports = router;