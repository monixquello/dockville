const express = require('express');

const router = express.Router();

router.get('/parkdash', (req,res) => {
    res.render('parkdash.pug')
});




module.exports = router;