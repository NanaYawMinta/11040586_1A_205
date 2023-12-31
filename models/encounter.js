// models/encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateAndTime: Date,
  type: String // Emergency/OPD/Specialist Care
});

module.exports = mongoose.model('Encounter', encounterSchema);
