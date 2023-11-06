const  {Router} = require('express'); 
const category = require('../models/category.schems');
const router =  Router();


router.get('/', (req, res) => {
    res.send("welcome")
})

router.post('/create', async (req, res) => {
    let data = await category.create(req.body)
    res.status(201).send(data);
                                                                         
})

module.exports =router;

