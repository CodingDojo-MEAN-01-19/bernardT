const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the model structure, CHANGE THIS PER PROJECT

const TaskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, default: ""},
  completed: {type: Boolean, default: false},
}, {timestamps: true})

// set this model in the mongoose library, CHANGE THIS PER PROJECT

mongoose.model('Task', TaskSchema);
