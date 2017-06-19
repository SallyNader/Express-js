var express = require('express');
var router = express.Router();
var Comment=require("../lib/Comment");

var Post=require("../lib/Post");
/* GET users listing. */





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
//          Post.update({_id:req.body.post_id},{$push:{comments:comment}},function(err){
//              res.redirect("/home");
//             if(err)
//                 console.log("can't update post");
//         });
     }
 });
 
// Comment.create({
//     
//     text:req.body.comment,
//     username:req.session.username,
//     time:Date.now(),
//     post_id:req.body.post_id,
//     relatedPost:req.body.post_id
//     
//     
// },function(err,comment){
//     
//     if(err)
//         res.sendStatus(500);
//     if(comment){
//         
//         Post.update({_id:req.body.post_id},{$push:{comments:Comment._id}},function(err){
//             
//             if(err)
//                 console.log("can't update post");
//         });
//         res.redirect("/home");
//     }
//     
//     
//     
//     
//     
// });
 
 
 
});

module.exports = router;
