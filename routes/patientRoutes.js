
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');


router.post('/patients', (req, res) => {


  res.json({ message: 'Patient registered successfully' });
});


router.get('/patients/:patientID', (req, res) => {

  res.json({ patient: {} });
});

module.exports = router;
