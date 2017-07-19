
var passport=require("passport"),

    LocalStrategy=require("passport-local").Strategy,

    User =require("../models/User");

   passport.serializeUser(function(user,done){
    
    done(null,user.id);
    
});


passport.deserializeUser(function(id,done){
    
    
    User.findById(id,function(err,user){
        
        done(err,user);
        
    });
    
});


passport.use("local.register",new LocalStrategy({
    
    
    usernameField:"username",
    passwordField:"password",
    emailField:"email",
    phoneFiled:"phone",
  passReqToCallback:true
},function(req,username,password,email,phone,done){
    
    
    
       User.findOne({"username":username},function(err,user){
        
        
        if(err)
            return done(err);
        if(user){
            req.flash("msgError","user already exists");
            return done(null,false);          
            
        }
        var newUser=new User();
        
        newUser.username=req.body.username;
        newUser.email=req.body.email;
        newUser.password=newUser.ecryptPassword(req.body.password);
        newUser.phone=req.body.phone;
    
        newUser.save(function (err){
                  
            if(err)
           return done(err);
           return done(null,newUser);
                  
                  
              });
    });
}));

//for login

passport.use("local.login",new LocalStrategy({
    
    usernameField:"username",
    passwordField:"password",
    passReqToCallback:true
    
},function(req,username,password,done){
    
    User.findOne({"username":username},function(err,user){
        
        
        if(err)
            return done(err);
        if(!user){
          
            req.flash("emailError","check your username ");
         return done(null,false);          
            
        }
        
        if(! user.validPassword(req.body.password)){
            req.flash("passwordError","check your password");
            return done(null,false);
        };
        req.session.username=user.username;
        return done(null,user);

    });
    
    
}));