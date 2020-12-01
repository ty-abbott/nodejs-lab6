/*

This file is for creating a Mongoose Model/Schema

*/

const mongoose = require('mongoose'); 
const schema  = mongoose.Schema;
const dbSchema = new schema({
    UserId: String, 
    Text: String, 
    Done: Boolean, 
    Date: String 
},
{collection: 'Tasks'});

module.exports = mongoose.model('Tasks', dbSchema); 