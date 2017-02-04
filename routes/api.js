
// Dependencies
var express = require('express');
var router = express.Router();

// Product
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');



// Language

// Rames-Category

// Rames-Info

// Rames-Picture

// Rames-Question

// Report-Info

// Report-Type

// Report

// User


// Return router
module.exports = router;
