const  {Router} = require('express'); 
const subcategory = require('../models/subcategory.schema');
const subcats = Router();


subcats.post('/post', async (req, res) => {
    let data = await subcategory.create(req.body)
    res.status(201).send(data);
                                                                         
})

subcats.get("/subcategory", async (req, res) => {
    let data = await subcategory.find().populate("categoryid")
    res.status(201).send(data);

})

module.exports =subcats;

