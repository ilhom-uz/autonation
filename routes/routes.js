var express = require('express');
var fs = require('fs');
var app = express();

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });


    //Smartup Ideas Page
    app.get('/startupidea', function (req, res) {
        res.render('startupidea');
    });
    //Smartup Ideas Page
    app.get('/publications', function (req, res) {
        res.render('publications');
    });
};
