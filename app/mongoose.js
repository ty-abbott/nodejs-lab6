/*

This file is for initializing mongoose

*/
require(`dotenv`).config()
const mongoose = require("mongoose")
mongoose.connect(process.env.ATLAS_CONNECTION_STRING, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
}, (error) => {
    if(error) console.log(error)
    else console.log('mongo db connected') 
});