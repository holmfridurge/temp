// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var ramesQuestionSchema = new mongoose.Schema({
    categoryID: Number,
    question: String,
    suggestion: Text,
    languageID: Number
});

// Return model
module.exports = restful.model('RamesQuestions', ramesQuestionSchema);
