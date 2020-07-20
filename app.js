var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require("cors");
const Sequelize = require("sequelize")




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const menuRouter = require('./routes/Menu')
const coffeRouter = require('./routes/Coffe')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu',menuRouter);
app.use('/coffe',coffeRouter)

module.exports = app;