
var fs = require('fs');


module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/resume', function (req, res) {
        var filePath = "/public/files/Ilkhom_Karimov_Resume.pdf";

        fs.readFile(__dirname + filePath, function (err, data) {
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

    app.get('/portfolioproject', function (req, res) {
        res.render('myportfolio');
    });

    app.get('/tweetybitcoin', function (req, res) {
        res.render('tweetybitcoin');
    });
    app.get('/prototype', function (req, res) {
        res.render('prototype');
    });
};
