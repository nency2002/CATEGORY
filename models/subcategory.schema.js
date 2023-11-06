const mongoose = require('mongoose');

let subcat = new mongoose.Schema({
    subcategory : String,
    categoryid : {type : mongoose.Schema.Types.ObjectId , ref : "category"}
})


const subcategory = mongoose.model("subcategory",subcat);

module.exports = subcategory