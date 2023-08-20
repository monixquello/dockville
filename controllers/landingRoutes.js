const express = require("express");
const router  = express.Router();

router.get("/landing", (req, res)=>{
    res.render("landing.pug")
})

module.exports = router;