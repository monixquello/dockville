const express = require("express");
const router  = express.Router();

router.get("/landing", (req, res)=>{
    res.render("landing.pug")
})

router.get("/home", (req, res)=>{
    res.render("home.pug")
});

module.exports = router;