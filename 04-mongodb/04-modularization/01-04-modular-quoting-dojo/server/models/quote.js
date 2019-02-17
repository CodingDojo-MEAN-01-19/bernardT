var mongoose = require('mongoose');
var { Schema } = mongoose;

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 20},
    quote: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Quote', QuoteSchema);

