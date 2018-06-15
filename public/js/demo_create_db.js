var mysql = require('mysql');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'))


var con = mysql.createConnection({
  host: "localhost",
<<<<<<< HEAD:views/pages/demo_create_db.js
  user: sqlCredentials.username,
  password: sqlCredentials.password
=======
  user: "root",
  password: "password"
>>>>>>> 5e3c8f1a84b511fc32434d03f6c31b067c612da5:public/js/demo_create_db.js
});

con.connect(function(err) {
  con.query("CREATE DATABASE pharmac", function (err, result) {
    console.log("Database created");
  });
});