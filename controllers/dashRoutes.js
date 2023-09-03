const express= require('express');
const {ensureLoggedIn} = require('connect-ensure-login');
const router = express.Router();


router.get('/dashboard', async (req, res) => {
    try{
        // let totalVehicle = await Register.aggregate([
        //     {"$group":{_id:"$all",totalsum:{$sum:"$charge"}}}
        // ])
        let totalVehicle = await Register.aggregate([
            { "$group": { _id: null, totalsum: { $sum: "$charge" } } }
        ]);
        
            res.render('dashboard.pug',{totalVehicle:totalVehicle[0].totalsum});

    }
    catch (error) {
        console.log(error);
        return res.status(400).send({message:"sorry couldnot get parking form"})
    }
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