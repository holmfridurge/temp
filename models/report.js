// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var reportSchema = new mongoose.Schema({
    userID: Number,
    name: String,
    reportTypeID: Number
});

// Return model
module.exports = restful.model('Reports', reportSchema);
