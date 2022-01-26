var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mapRouter = require('./routes/map');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var gameRouter = require('./routes/game');
var mapGameRouter = require('./routes/mapGame');
var infosRouter = require('./routes/infos');
var plantsRouter = require('./routes/plants');
var leaderboardRouter = require('./routes/leaderboard');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/map', mapRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/game', gameRouter);
app.use('/mapGame', mapGameRouter);
app.use('/infos', infosRouter);
app.use('/plants', plantsRouter);
app.use('/leaderboard', leaderboardRouter);

module.exports = app;
