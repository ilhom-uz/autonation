var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

//setting View engine for EJS
app.set('views', './src/views');
app.set('view engine', '.ejs');

//Routes from /routes/routes.js
require('./routes/routes')(app);


app.listen(port, function (err) {
    console.log('running server on port ' + port);
}  );
