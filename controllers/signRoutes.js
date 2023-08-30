const express = require("express");
const Sign = require("../models/signModel");
const router = express.Router();
const passport = require("passport");
// const { ensureLoggedIn } = require("connect-ensure-login");


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
    console.log(req.body);
    await Sign.register(sign, req.body.password);
    res.redirect("/api/sign");
  } 
  catch(error){
    res.status(400).send({ message: "failed to register user" });
    console.log(error);
  }
});

router.get("/log", (req, res)=>{
  res.render("log.pug")
});


router.post("/log", passport.authenticate("local",
{failureRedirect:"/api/log"}),
  (req, res) => {
    req.session.user=req.user
    let loggedInUser = req.session.user.firstname;
    console.log(loggedInUser)
    console.log(req.body)
    console.log(req.session.user.role)
    if(req.session.user.role==='manager'){
      res.render('dashboard.pug')
    }
    else if(req.session.user.role==='employee'){
      res.render('tyredash.pug')
    }
    else if(req.session.user.role==='employee'){
      res.render('parkdash.pug')
    }
    
  }
)

router.get("/logout", (req, res)=>{
  req.session.destroy(()=>{res.redirect("/api/login")})
  console.log("You have been logged out")
})


module.exports = router;
