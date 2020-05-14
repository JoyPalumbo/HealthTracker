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
const getFood = require('./database/index');
const getWater = require('./database/index');
const getExercise = require('./database/index');

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

app.get('/prev/:date', (req, res) => {
  console.log(req);
  // getPrev.getPrev((err, prev) => {
  //   if(err) {
  //     console.log('error getting previous date from db', err);
  //     res.sendStatus(500);
  //   }
  //   else {
  //     console.log("getting previous from db", prev);
  //     res.json(prev)
  //   }
  // })
})

//****test this****
app.get('/food', (req, res) => {
  getFood.getFood((err, food) => {
    if (err) {
      console.log('error getting food from db', err);
      res.sendStatus(500);
    } else {
      console.log("getting food from db:", food);
      res.json(food);
    }
  })
});

app.get('/water', (req, res) => {
  getWater.getWater((err, water) => {
    if (err) {
      console.log('error getting water from db', err);
      res.sendStatus(500);
    } else {
      console.log("getting water from db:", water);
      res.json(water);
    }
  });
});

app.get('/exercise', (req, res) => {
  getExercise.getExercise((err, exercise) => {
    if (err) {
      console.log('error getting exercise from db', err);
      res.sendStatus(500);
    } else {
      console.log("getting exercise from db:", exercise);
      res.json(exercise);
    }
  });
});




app.listen(port, () => console.log(`Listening on port ${port}`));