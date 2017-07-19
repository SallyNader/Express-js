const express = require('express'),
 router = express.Router(),
 Comment=require("../models/Comment"),
 Post=require("../models/Post");

router.post('/postComment', function(req, res, next) {
 
 
 
 
 var comment =new Comment({
     
     text:req.body.comment,
     username:req.session.username,
     time:Date.now(),
    
     post:req.body.post_id
     
     
 });
 comment.save(function(err){
     
     if(err)
         res.send("can't save comment");
     else{
         
         res.redirect("/home");

     }
 });

 
 
 
});

module.exports = router;
