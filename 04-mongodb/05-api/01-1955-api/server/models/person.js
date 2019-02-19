const mongoose = require('mongoose');
    // validator = require('validator')
    // bcrypt = require('bcrypt')
const { Schema } = mongoose;

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'person born in 1995'],
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Person', PersonSchema);
