const express = require('express'),
 router = express.Router(),
 User=require("../models/User"),
 passport=require("passport");




router.get('/', function(req, res, next) {
  res.render( "login",{emailError:req.flash("emailError")
        ,passwordError:req.flash("passwordError")});
  req.session.errors=null;
});


router.post("/login",passport.authenticate("local.login",{
    successRedirect:"/profile",
    failureRedirect:"/login",
    failureFlash:true
    
    
}));
router.post('/l',function(req,res,next){
    
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
