const express = require("express");
const Register = require("../models/registerModel");

const router = express.Router();

router.get("/registerform", (req, res) => {
  res.render("register.pug");
});


router.post("/regregister", async (req, res) => {
    try{
        const register = new Register(req.body);
        await register.save();
        console.log(req.body);
        res.redirect("/api/registerform");
    }
    catch(error){
        res.status(400).render("register.pug")
        console.log(error);
    }
})


    router.get("/registerList", async(req, res)=>{
        try{
            let items = await Register.find();
            res.render("registerList.pug",
             {registers: items}
             );
        }
        catch(error){
            console.log(error);
            return res.status(400).send({message: "Sorry could not get register form"});
        }
    });
    
    router.get("/report", async(req, res)=>{
        try{
            let items = await Register.find();
            res.render("report.pug",
             {registers: items}
             );
        }
        catch(error){
            console.log(error);
            return res.status(400).send({message: "Sorry could not get register form"});
        }
   
})


// for deleting
router.post("/register/delete",async (req, res)=>{
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
            _id:req.params.id
        })
        res.render("editregister", {register:reg});
    }
    catch(error){
        res.status(400).send("Could not find register in database")
        console.log(error);
    }
})

router.post("/register/edit", async(req, res) => {
    try{
        await Register.findOneAndUpdate({_id:req.query.id}, req.body);
        res.redirect("/api/report");
    }
    catch(error){
            res.status(400).send({message: "could not edit data"});
            console.log(error);
        }
})







module.exports = router;