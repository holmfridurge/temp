// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var reportTypeSchema = new mongoose.Schema({
    username: String,
    token: String,
    name: String,
    email: String,
    role: String,
    temptoken: String
});

// Return model
module.exports = restful.model('ReportsType', reportTypeSchema);
