const mongoose = require('mongoose');

const mongo_url = process.env.DB_URI;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('mongodb connected...');
    }).catch((err)=>{
        console.log('mongodb connection error: ', err);
    })