
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');


router.post('/patients', (req, res) => {
  

  res.json({ message: 'Patient registered successfully' });
});



module.exports = router;
