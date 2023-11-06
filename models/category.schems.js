const mongoose = require('mongoose');

let cat = new mongoose.Schema({
    category:String,
})


const category = mongoose.model("categorys",cat);

module.exports = category