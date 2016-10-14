var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.port;

app.use(express.static('public'));
app.use(express.static('src/views'));

//setting View engine for EJS
app.set('views', './src/views');
app.set('view engine', '.ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/resume', function (req, res) {
    var filePath = "/public/files/Ilkhom_Karimov_Resume.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

app.get('/blog', function (req, res) {
    res.render('blog');
});




app.listen(port, function (err) {
    console.log('running server on port ' + port);
}  );
