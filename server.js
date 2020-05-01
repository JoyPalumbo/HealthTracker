const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

const saveWater = require('./database/index');
const saveNutrition = require('./database/index');
const saveExercise = require('./database/index');
const saveProfile = require('./database/index');

app.post('/water', (req, res) => {
  saveWater.saveWater(req.body.ounces);
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`,
  );
});

app.post('/nutrition', (req, res) => {
  saveNutrition.saveNutrition(req.body);
  console.log("logging from router", req.body);
  res.send(
    `Server received nutrition info: ${req.body}`,
  );
})

app.post('/exercise', (req, res) => {
  saveExercise.saveExercise(req.body);
  console.log("logging exercise from router", req.body);
  res.send(
    `Server received nutrition info: ${req.body}`,
  );
})

app.post('/profile', (req, res) => {
  saveProfile.saveProfile(req.body);
  console.log("logging profile from router", req.body);
  res.send(
    `Server received nutrition info: ${req.body}`,
  );
})



app.listen(port, () => console.log(`Listening on port ${port}`));