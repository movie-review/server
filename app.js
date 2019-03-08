require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quoteRouter = require('./routes/quote');

const port = process.env.PORT || 3000

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quotes', quoteRouter)
app.use('/tmdb', require('./routes/tmdb'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports = app;
