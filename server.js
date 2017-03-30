"use strict";

let compression = require('compression'),
  helmet = require('helmet'),
  methodOverride = require('method-override'),
  express = require('express');

const PORT =process.env.PORT || 8080

let app = express();

app.use(helmet());
app.use(helmet.hidePoweredBy({setTo: "PHP 4.2.0"}));

app.use(compression({threshold: 0}));
app.use(express.static(__dirname + '/dist'));
app.use(methodOverride());

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
});
