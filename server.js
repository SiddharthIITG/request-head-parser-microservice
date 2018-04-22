// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
// app.use(bodyParser.json());
 
// app.set('views', './src/views/');
// app.set('view engine', 'ejs');
// app.set('json spaces', 2);

// // http://expressjs.com/en/starter/basic-routing.html
// app.use("/", function (req, res, next) {
//   // res.setHeader("Content-Type", "application/json");
//   res.send(req.body);
//   next();
//   // res.render('index');
// });

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
