const express= require('express');
const {ensureLoggedIn} = require('connect-ensure-login');
const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.render('dashboard.pug');
});

router.get('/batterydash',  (req, res) => {
    res.render('batterydash.pug')
})
router.get('/tyredash',ensureLoggedIn('/api/log'),  (req, res) => {
    res.render('tyredash.pug')
})
router.get('/parkdash', ensureLoggedIn('/api/log'), (req, res) => {
    res.render('parkdash.pug')
})

module.exports = router;