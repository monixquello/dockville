const express = require('express');
const Boda = require('../models/bodaModel'); 

const router = express.Router();

router.get('/boda', (req, res) => {
    res.render('boda.pug')
});

router.post('/regboda',async (req, res) => {
    try{
        const boda = new Boda(req.body);
        await boda.save(); 
        console.log(req.body);
        res.redirect('/api/boda');
    }
    catch(error){
        res.status(400).render('boda.pug')
        console.log(error);
    }
});

router.get('/bodaList', async (req,res)=>{
    try{
        let items = await Boda.find();
        res.render('bodaList.pug',
        {bodas: items}
        )
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message:"couldnot get boda list"})
    }
})


module.exports = router;