const express = require("express");
const Register = require("../models/registerModel");

const router = express.Router();

router.get("/registerform", (req, res) => {
  res.render("register.pug");
})


router.post("/regregister", async (req, res) => {
    try{
        const register = new Register(req.body);
        await register.save();
        console.log(req.body);
        res.redirect("/api/parkdash");
    }
    catch(error){
        res.status(400).render("register.pug")
        console.log(error);
    }
})


    router.get("/parkdash",  async (req, res)=>{
        try{
            let items = await Register.find();
            let vehiclesIn = await Register.find({status:"in"});
            let vehiclesOut = await Register.find({status:"out"});
            res.render("parkdash.pug",
             {registers: items,
                vehiclesIn: vehiclesIn,
                vehiclesOut: vehiclesOut
            }
             );
        }
        catch(error){
            console.log(error);
            return res.status(400).send({message: "Sorry could not get register form"});
        }
    });
    
    // router.get("/parkdash", async (req, res)=>{
    //     try{
    //         let totalVehicle = await Register.aggregate([
    //             {"$group":{_id:"$all",
    //             totalsum: {$sum:"$charge"}
    //         }}
    //         ]);
    //         res.render("parkdash",{totalVehicle:totalVehicle[0].totalsum})
 
    //     }
    //     catch(error){
    //         console.log(error);
    //         return res.status(400).send({message: "Sorry could not get register form"});
    //     }
    // });

 
    
    
    router.get("/parkreport", async(req, res)=>{
        try{
            // let items = await Register.find();
            // let itemsOut = await Register.find({status:"in"});
            let items = await Register.find({status:"out"});
            res.render("parkreport.pug",
             {  registers:items
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


// for deleting
router.post("/registerList/delete",async (req, res)=>{
    try{
        await Register.deleteOne({_id:req.body.id});
        res.redirect("/back");

    }
    catch(error){
            res.status(400).send({message: "unable to delete items from database"});
        }
})


// how to update data
router.get("/register/edit/:id", async(req, res)=>{
    try{
        const reg = await Register.findOne({
            _id:req.query.id
        })
        console.log(reg)
        res.render("editregister", {register:reg});
    }
    catch(error){
        res.status(400).send("Could not find register in database")
        console.log(error);
    }
})

router.post("/register/edit", async(req, res) => {
    try{
        await Register.findOneAndUpdate({_id:req.params.id}, req.body);
        res.redirect("/api/parkreport");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})







module.exports = router;