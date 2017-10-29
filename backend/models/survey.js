const mongoose = require('mongoose');

// define schema for Surveys collection (Survey model)
const surveySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }
}, { timestamps: true });

// export Survey model to app
module.exports = mongoose.model('Survey', surveySchema);