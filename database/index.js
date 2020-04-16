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
module.exports.saveWater = saveWater;