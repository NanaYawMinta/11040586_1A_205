const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const encounterRoutes = require('./routes/encounterRoutes');

const app = express();
const PORT = 3001;


mongoose.connect('mongodb://localhost:27017/ugmc', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());


app.use('/api', patientRoutes);
app.use('/api', encounterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
