const express = require('express'),
 router = express.Router(),
 Post=require("../models/Post"),
 Comment=require("../models/Comment");

router.post("/post",function(req,res,next){
    
    
Post.create({
    text:req.body.status  ,
    username:req.session.username,
    date:Date.now()
    
    
},function(err,post){
    if(err)
        res.send("error");
    if(post){
        
        res.redirect("/home");
    }
    
});
    
    
});
router.get("/logout",function(req,res,next){
    
    req.session.username=null;
    
    res.redirect("/login");
    
});

router.get('/', function(req, res, next) {
    
    

Post.find().
   populate("comments" ).exec(function(err,post){
     
     if(err)
          res.send(err);
        else{
          
           res.render("home",{posts:post});
       }
      
    }); 
    
    
    
});

module.exports = router;
