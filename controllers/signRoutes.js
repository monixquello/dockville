const express = require("express");
const Sign = require("../models/signModel");
const router = express.Router();
const passport = require("passport");
const { ensureLoggedIn } = require("connect-ensure-login");


router.get("/sign", 
// ensureLoggedIn("/api/log"),
(req, res) => {
//   req.session.user = req.user;
//   if(req.session.user.role === "manager"){
//     res.render('employee.pug')
//   }else{
    res.render('sign.pug')
    // , {alert:"Access denied"})
  // }
});

router.post("/regsign", async (req, res) => {
  try {
    const sign = new Sign(req.body);
    await sign.save();
    console.log(req.body);
    res.redirect("/api/sign");
  } 
  catch(error){
    res.status(400).send({ message: "failed to register user" });
    console.log(error);
  }
});



router.get("/signList", async (req,res)=>{
  try{
      let items = await Sign.find();
      res.render("signList.pug",
      {signs: items}
      )
  }
  catch(error){
      console.log(error);
      return res.status(400).send({message:"Sorry could not get signList"})
  }
})

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

// editing routes
router.get("/sign/edit/:id", async(req, res)=>{
  try{
      const sign = await Sign.findOne({
          _id:req.params.id
      })
      res.render("editsign", {sign:sign});
  }
  catch(error){
      res.status(400).send("Could not find items in database")
      console.log(error);
  }
})

router.post("/sign/edit", async(req, res) => {
  try{
      await Sign.findOneAndUpdate({_id:req.query.id}, req.body);
      res.redirect("/api/sign");
  }
  catch(error){
          res.status(400).send({message: "could not edit data"});
          console.log(error);
      }
})

// login routes

router.get("/log", (req, res)=>{
  res.render("log.pug")
});

// router.post("/logi", passport.authenticate("local",
// {failureRedirect:"/api/log"}),
//   (req, res) => {
//     req.session.user=req.user
//     let loggedInUser = req.session.user.firstname;
//     console.log(loggedInUser)
//     console.log(req.body)
//     console.log(req.session.user.role)
//     if(req.session.user.role==='manager'){
//       res.redirect('/api/dashboard')
//     }
//     if(req.session.user.role==='employee'){
//       res.redirect('/api/home')
//     }
    
    
//   }
// )

router.post("/logi",passport.authenticate("local", { failureRedirect: "/api/log" }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("/api/home");
  }
);




router.get("/logout", (req, res)=>{
  req.session.destroy(()=>{res.redirect("/api/login")})
  console.log("You have been logged out")
})


module.exports = router;
