// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var ramesCategorySchema = new mongoose.Schema({
    category: String,
    info: Text,
    languageID: Number
});

// Return model
module.exports = restful.model('RamesCategories', ramesCategorySchema);
