var mongoose = require('mongoose');
var { Schema } = mongoose;

var RabbitSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 20},
    description: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Rabbit', RabbitSchema);

