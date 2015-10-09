var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var calculations = require('../models/calculations');

router.get('/getCalculation', function(req, res, next){
    calculations.find(function(err, calculation){
        res.json(calculation);
    })
});

router.post('/addCalculation', function(req, res, next){
    console.log(req.body);
    calculations.create(req.body, function(err, post){
        res.send('all good');
    })
});

module.exports = router;
