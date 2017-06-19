
var express = require('express');
var router = express.Router();
var User = require("../lib/User");

var Gallery=require("../lib/Gallery");
/* GET home page. */
router.get('/', function(req, res, next) {
//  User.findOne({username:req.session.username},function(err,user){
//      
//  });
User.findOne({username:req.session.username},function(err,user){
    
    if(!err)
        {req.session.user_id=user._id;
    
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

