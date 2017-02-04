// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var reportTypeSchema = new mongoose.Schema({
    name: String,
    info: Text
});

// Return model
module.exports = restful.model('ReportsType', reportTypeSchema);
