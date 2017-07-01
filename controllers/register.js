var express = require('express'),
     router = express.Router(),
     passport=require("passport"),
     User=require("../models/User");
/* GET home page. */
router.get('/', function(req, res, next) {
    
   
  res.render('register',{msgError:req.flash("msgError"),errors:req.session.errors});
// req.session.errors=null;
   
});

router.post("/register",passport.authenticate("local.register",{
    
    successRedirect:"/profile",
    failureRedirect:"/register",
   failureFlash:true
}));
router.post("/insert",function(req,res,next){
    
        
     var item={
        
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone
        
    };
   
   req.checkBody("username","enter username not less than 6 charachters").isLength({min:6});
   req.checkBody("password","password shouldn't less than 8 charachters").isLength({min:8});
   
   req.checkBody("confirmPassword" ,"confirm the password please!!").equals(req.body.password);
   
   req.checkBody("email","enter email form").isEmail();
   req.checkBody("phone","enter the phone number").isInt();
   var errors =req.validationErrors();
   
   if (errors) {
       
       req.session.errors=errors;
   
       console.log(errors);
  res.redirect("/register");
  }
  else {
          
    var newUser=new User();
    
    newUser.username=item.username;
    newUser.password=item.password;
    newUser.email=item.email;
    newUser.phone=item.phone;
    newUser.image="default.jpg";
    
    newUser.save(function(err,savedUser){
        
        if(err){
            
            return res.status(500).send();
        }
    });
    
     req.session.username=req.body.username;
res.redirect("/profile");
    
    
   console.log("no errors");
  }


    
});



module.exports = router;