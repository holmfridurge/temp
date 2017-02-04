// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var languageSchema = new mongoose.Schema({
    name: String
});

// Return model
module.exports = restful.model('Languages', languageSchema);
