
var express = require('express'),
      router = express.Router(),
      User = require("../models/User"),
      passport=require("passport"),
      Gallery=require("../models/Gallery");
/* GET home page. */
router.get('/',isLoggedIn, function(req, res, next) {

User.findOne({username:req.session.username},function(err,user){
    
    if(!err)
        {
           req.session.user_id=req.user._id;
          req.session.username=req.user.username;
    
   }
});
Gallery.find({username:req.session.username},function(err,gallerys){
    var g="error";
    if(err)
        
        g="error";
    
    else{
        
        g=gallerys;
    }
    
     res.render('profile',{username:req.session.username,gallerys:g});
});


    
 
});

module.exports = router;

function isLoggedIn(req,res,next){
    
    if(req.isAuthenticated()){
        return next();
        
    }else
    res.redirect("/login");
}