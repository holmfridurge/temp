// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var ramesInfoSchema = new mongoose.Schema({
    name: String,
    info: Text,
    languageID: Number,
    categoryID: Number
});

// Return model
module.exports = restful.model('RamesInfos', ramesInfoSchema);
