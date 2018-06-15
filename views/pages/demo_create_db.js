var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "huzaifa147"
});

con.connect(function(err) {
  con.query("CREATE DATABASE mydb", function (err, result) {
    console.log("Database created");
  });
});