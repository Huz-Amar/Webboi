var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;
var session = require('client-sessions');

//using ejs and express Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//const inventory = require('./public/js/codeForInventory');

var router = require('./app/routes');
app.use('/', router);

//static file locations
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('up and running');
})

app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  }));

app.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (!user) {
        res.render('login.jade', { error: 'Invalid email or password.' });
      } else {
        if (req.body.password === user.password) {
          res.redirect('/dashboard');
        } else {
          res.render('login.jade', { error: 'Invalid email or password.' });
        }
      }
    });
  });

//inventory.getInfo;