
const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');


router.post('/encounters', (req, res) => {

  res.json({ message: 'Encounter started successfully' });
});

module.exports = router;
