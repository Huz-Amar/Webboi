var mysql = require('mysql');
var sqlCredentials = require(path.join(__dirname, '../../credentials.json'));

var con = mysql.createConnection({
  host: "localhost",
  user: sqlCredentials.username,
  password: sqlCredentials.password,
  database: "mydb"
});

con.connect(function(err) {
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    console.log("Number of records inserted: " + result.affectedRows());
  });
});