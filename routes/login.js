var express = require('express');
var router = express.Router();
var User=require("../lib/User");
/* GET users listing. */




router.get('/', function(req, res, next) {
  res.render( "login",{errors :req.session.errors});
  req.session.errors=null;
});

router.post('/login',function(req,res,next){
    
    var username=req.body.username;
    var password=req.body.password;
    
    
    User.findOne({username:username,password:password},function(err,user){
        
       
      
        
        if(user){
            
            req.session.username=req.body.username;
            
            
            res.redirect("/profile");
            
        }if(err){
            
            req.session.errors="enter correct username and password";
            
            res.redirect("/login");
            
            
        }
           
    });
    
});
module.exports = router;
