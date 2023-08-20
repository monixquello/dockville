const express = require("express");
const Sign = require("../models/employeeModel");
const router = express.Router();


router.get("/sign", (req, res) => {
  res.render("employee.pug");
});

router.post("/register", async (req, res) => {
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


module.exports = router;
