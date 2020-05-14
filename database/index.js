const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'FILL_ME_IN',
  database: 'health_diary',
});

const saveWater = (data) => {
  let ounces = { ounces: data }
  console.log(ounces);
  connection.query('INSERT INTO water SET ?', ounces, (err, water) => {
    if (err) {
      throw err;
    } else {
      console.log(data, "でた!");
    }
  });
};

const saveNutrition = (data) => {
  let nutrition = {
    food_name: data.foodName,
    calories: data.calories,
    carbs: data.carbs,
    sugar: data.sugar,
    fat: data.fat,
    //****fix other field, won't save to DB */
    // other: data.other
  }
  console.log("getting nutrition", nutrition);
  connection.query('INSERT INTO food SET ?', nutrition, (err, food) => {
    if (err) {
      throw err;
    } else {
      console.log(data, "でた!");
    }
  });
};

const saveExercise = (data) => {
  let todayExercise = {
    exercise: data.exercise,
    time: data.time,
    reps: data.reps,
    notes: data.notes,
  }
  console.log("getting exercise", todayExercise);
  connection.query('INSERT INTO exercise SET ?', todayExercise, (err, exercise) => {
    if (err) {
      throw err;
    } else {
      console.log(data, "でた!");
    }
  });
};


const saveProfile = (data) => {
  let newProfile = {
    name: data.name,
    weightGoal: data.weightGoal,
    currentWeight: data.currentWeight,
    waterGoal: data.waterGoal,
    calorieGoal: data.calorieGoal,
  }
  console.log("getting nutrition", newProfile);
  connection.query('INSERT INTO profile SET ?', newProfile, (err, profile) => {
    if (err) {
      throw err;
    } else {
      console.log(data, "でた!");
    }
  });
};

const getFood = (cb) => {
  connection.query('select * from food', (err, food) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, food);
    }
  });
};

const getWater = (callback) => {
  connection.query('select * from water', (err, water) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, water);
    }
  });
};

getExercise = (callback) => {
  connection.query('select * from exercise', (err, exercise) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, exercise);
    }
  })
}

const getAll = (callback) => {
  const { date } = req.params;
  console.log(data);
}

module.exports.saveWater = saveWater;
module.exports.saveNutrition = saveNutrition;
module.exports.saveExercise = saveExercise;
module.exports.saveProfile = saveProfile;
module.exports.getFood = getFood;
module.exports.getWater = getWater;
module.exports.getExercise = getExercise;
module.exports.getAll = getAll;


 // let nutrition = {
  //   food_name: data.nutrition.foodName,
  //   calories: data.nutrition.calories,
  //   carbs: data.nutrition.carbs,
  //   sugar: data.nutrition.sugar,
  //   fat: data.nutrition.fat,
  //   other: data.nutrition.other
  // }
  // console.log(nutrition);
  // connection.query('INSERT INTO food SET ?', nutrition, (err, food) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log(data, "でた!");
  //   }
  // });