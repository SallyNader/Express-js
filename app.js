var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session=require("express-session");
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//var index = require('./routes/index');
//var multer=require("multer");
//var upload=multer({dest:"public/uploads/"});
 var   relationship = require("mongoose-relationship");



var users = require('./routes/users');
var register=require('./routes/register');
var home=require("./routes/home");
var login=require("./routes/login");
var comment=require("./routes/comment");
var upload=require("./routes/upload");

var profile=require("./routes/profile");
var app = express();
app.locals.username="empty";
// view engine setup

app.use(session({ resave: true,  saveUninitialized: true,secret:"3836428"}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get("/username/:username",function(req,res,next){
    
    
    res.send(req.username);
    
});


app.get("/",function(req,res,next){
    
    res.render("chat");
    
    
});
app.param("username",function(req,res,next,username){
    
    if(username == "ali")
        res.send("no alii");
    else
        console.log("atfdl ya bsha");
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());

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
