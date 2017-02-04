// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var reportInfoSchema = new mongoose.Schema({
    reportID: Number,
    questionID: Number,
    answer: Text
});

// Return model
module.exports = restful.model('ReportsInfo', reportInfoSchema);
