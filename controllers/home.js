var express = require('express'),
 router = express.Router(),
 Post=require("../models/Post"),
 Comment=require("../models/Comment");

/* GET users listing. */


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
    
    
//    
//    Comment.find().
//            
//    populate({path:"relatedPost" }).exec(function(err,comments){
//        
//       if(err)
//       res.send(err);
//   else
//       res.send(comments);
//        
//        
//    })  ;
    
//    
          
//            
//            
// var comment =new Comment({
//     
//     text:"hello world",
//     username:"sos",
//     time:Date.now(),
//    
//     relatedPost:"5943904694c14f088031f317"
//     
//     
// });
// comment.save(function(err){
//     
//     if(err)
//         res.send("can't save comment");
//     else{
//         
//        
//          Post.update({_id:"5943904694c14f088031f317"},{$push:{comments:Comment._id}},function(err){
//              
//             
//             if(err)
//                 console.log("can't update post");
//             else{
//                 
//                 res.send("update post");
//             }
//         });
//     }
// });
    
 
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
