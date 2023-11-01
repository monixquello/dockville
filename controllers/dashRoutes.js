const express= require('express');
// const {ensureLoggedIn} = require('connect-ensure-login');
const Register = require('../models/registerModel');
const Tyre = require('../models/tyreModel');
const Battery = require('../models/batteryModel');
const router = express.Router();


// TOTAL SALES FOR PARKING

router.get('/dashboard', async (req, res) => {
    let total, total1, total3;
    try{
        total = await Register.aggregate([
        {
            $group:{
                _id: "$all",
                revenue: {$sum: "$charge"},
            },
        },
       ]);

        total3 = await Battery.aggregate([
        {
            $group:{
                _id: "$all",
                revenue3: {$sum: "$charge"},
            },
        },
       ]);

        total1 = await Tyre.aggregate([
        {
            $group:{
                _id: "$all",
                revenue1: {$sum: "$charge"},
            },
        },
       ]);


    //    console.log(total1);
    //    console.log(total1[0])
    //    let total1sum = total1[0].revenue1

    //    console.log(total3);
    //    console.log(total3[0]);
    //    let total3sum = total3[0].revenue3

    
    //    console.log(total);
    //    console.log(total[0])
    //    let totalsum = total[0].revenue

       
       res.render('dashboard.pug',{
        totalsum: total[0].revenue,
        total1sum: total1[0].revenue1,

        total3sum: total3[0].revenue3,
        });

    }
    catch (error) {
        console.log(error);
        return res.status(400).send({message:"sorry couldnot get parking form"})
    }
});



router.get('/batterydash', (req, res) => {
    res.render('batterydash.pug')
})

router.get('/tyredash',(req, res) => {
    res.render('tyredash.pug')
})

router.get('/parkdash',  (req, res) => {
    req.session.user = req.user
    res.render('parkdash.pug')
})

router.get("/home",  (req, res)=>{
    res.render("home.pug")
    

});


module.exports = router;



















// const express= require('express');
// const {ensureLoggedIn} = require('connect-ensure-login');
// const Register = require('../models/registerModel');
// const Tyre = require('../models/tyreModel');
// const Battery = require('../models/batteryModel');
// const router = express.Router();


// // TOTAL SALES FOR PARKING

// router.get('/dashboard', async (req, res) => {
//     try{
//        let total = await Register.aggregate([
//         {
//             $group:{
//                 _id: "$all",
//                 revenue: {$sum: "$charge"}
//             }
//         }
//        ])

//        let total3 = await Battery.aggregate([
//         {
//             $group:{
//                 _id: "$all",
//                 revenue3: {$sum: "$charge"}
//             }
//         }
//        ])

//        let total1 = await Tyre.aggregate([
//         {
//             $group:{
//                 _id: "$all",
//                 revenue1: {$sum: "$charge"}
//             }
//         }
//        ])


//        console.log(total1);
//        console.log(total1[0])
//        let total1sum = total1[0].revenue1

//        console.log(total3);
//        console.log(total3[0]);
//        let total3sum = total3[0].revenue3

    
//        console.log(total);
//        console.log(total[0])
//        let totalsum = total[0].revenue

       
//        res.render('dashboard.pug',{
//         totalsum,
//         total1sum,
//         total3sum,
//         });

//     }
//     catch (error) {
//         console.log(error);
//         return res.status(400).send({message:"sorry couldnot get parking form"})
//     }
// });



// router.get('/batterydash',  (req, res) => {
//     res.render('batterydash.pug')
// })
// router.get('/tyredash',ensureLoggedIn('/api/log'),  (req, res) => {
//     res.render('tyredash.pug')
// })
// router.get('/parkdash', ensureLoggedIn('/api/log'), (req, res) => {
//     res.render('parkdash.pug')
// })

// module.exports = router;