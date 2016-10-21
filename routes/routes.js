var express = require('express');
var fs = require('fs');
var app = express();

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    //Direct Link to my Resume
    app.get('/resume', function (req, res) {
        var filePath = "/../public/files/Ilkhom_Karimov_Resume.pdf";
        fs.readFile(__dirname + filePath, function (err, data) {
            res.contentType("application/pdf");
            res.send(data);
        });
    });

    //About me
    app.get('/about', function (req, res) {
        res.render('about');
    });

    //Contact me
    app.get('/contact', function (req, res) {
        res.render('contact');
    });

    // List of All portfolios
    app.get('/portfolio', function (req, res) {
        res.render('portfolio');
    });

    //Blog subdomain
    app.get('/blog', function (req, res) {
        res.render('blog');
    });

    //My Portfolio Project Description
    app.get('/portfolioproject', function (req, res) {
        res.render('myportfolio');
    });

    //Article Page about TweetyBitcoin Project
    app.get('/tweetybitcoin', function (req, res) {
        res.render('tweetybitcoin');
    });

    //Prototyping Page
    app.get('/prototype', function (req, res) {
        res.render('prototype');
    });

    //Smart Home
    app.get('/smarthome', function (req, res) {
        res.render('smarthome');
    });

    //Smartup Ideas Page
    app.get('/startupidea', function (req, res) {
        res.render('startupidea');
    });
};
