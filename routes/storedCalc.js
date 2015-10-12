var express = require('express');
var router = express.Router();
var calculations = require('../models/calculations');

router.get('/getCalculation', function(req, res, next){
    calculations.find(function(err, data){
        console.log(data[0].operator);
        if (data[0].operator == "Add"){
            var add = (data[0].number1 + data[0].number2);
            res.json(add);
        } else if (data[0].operator == "Subtract"){
            res.json(data[0].number1 - data[0].number2);
        } else if (data[0].operator == "Multiply"){
            res.json(data[0].number1 * data[0].number2);
        } else
            res.json(data[0].number1 / data[0].number2);
    })
});

router.post('/addCalculation', function(req, res, next){
    //console.log(req.body);
    calculations.create(req.body, function(err, post){
        res.send('all good');
    })
});

router.delete('/deleteAll', function(req, res, next) {
    calculations.remove({}, function(){
        console.log('All objects removed!');
    });
    res.sendStatus(200);
});

module.exports = router;
