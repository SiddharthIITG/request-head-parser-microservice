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

// app.set('views', './src/views/');
// app.set('view engine', 'ejs');
// app.set('json spaces', 2);


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('Information:\n\n');
  const regexp = /\(([^()]+)\)/;
  var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
  if(ip.substr(0,7) == "::ffff:")
    ip = ip.substr(7);
  res.end(JSON.stringify({os: req.headers['user-agent'].match(regexp)[1], ip: ip, lang: req.headers["accept-language"]}, null, 2))
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
