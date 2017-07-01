var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session=require("express-session");
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var  MongoStore=require("connect-mongo")(session);
 var   relationship = require("mongoose-relationship");
var flash=require("express-flash");
var mongoose=require("mongoose");
var passport=require("passport");
var users = require('./controllers/users');
var register=require('./controllers/register');
var home=require("./controllers/home");
var login=require("./controllers/login");
var comment=require("./controllers/comment");
var upload=require("./controllers/upload");

var profile=require("./controllers/profile");

require("./config/passport");
var app = express();
app.locals.username="empty";


app.use(session({ resave: true,  saveUninitialized: true,secret:"3836428"}));
app.use(flash());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());


app.use(session({
    
    secret:"multimedia",
    resave:true,
    saveUninitialized:true,
    store:new MongoStore({mongooseConnection:mongoose.connection})
    
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/users', users);
app.use('/register',register);
app.use("/home",home);
app.use("/login",login);
app.use("/comment",comment);

app.use("/upload",upload);
app.use("/profile",profile);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
