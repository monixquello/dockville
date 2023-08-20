const express = require("express");
const router  = express.Router();



router.get("/log", (req, res)=>{
    res.render("log.pug")
});







module.exports = router;