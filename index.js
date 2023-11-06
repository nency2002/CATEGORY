const express = require('express');
const connect = require('./config/db');
const router = require('./routes/category.route');
const subcats = require('./routes/subcategory.route');


const app = express();

app.use(express.json());
app.use(router)
subcats.use("subcategory",router)

app.listen(9000 , ()=>{
    connect()  
    console.log("listening on 8090");
})