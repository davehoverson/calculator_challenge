/**
 * Created by Amelia on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var calcSchema = new Schema({
    number1 : Number,
    number2 : Number,
    operator : String
});

var calculations = mongoose.model('calculations', calcSchema);

module.exports = calculations;