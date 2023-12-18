// models/vital.js
const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
  patientID: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spO2: String
});

module.exports = mongoose.model('Vital', vitalSchema);
