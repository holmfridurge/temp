// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var ramesPictureSchema = new mongoose.Schema({
    name: String,
    url: String
});

// Return model
module.exports = restful.model('RamesPictures', ramesPictureSchema);
