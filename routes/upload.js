var express = require('express');
var router = express.Router();
var multer=require("multer");



var Gallery=require("../lib/Gallery");


var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/uploads')
  },
  filename: function (req, file, callback) {
    callback(null,file.originalname)
  }
});
    
    var upload = multer({ storage: storage });
    
router.post("/upload",upload.single("file"),function(req,res,next){


                                  
   Gallery.create({imageName:req.file.originalname,
                                     username:req.session.username
                                      ,description:req.body.description,
                                          user:req.session.user_id}, function (err, gallery) {
                        if (err) console.log("not saved in database");
                        else
                            { console.log("saved i database also");
                            
                                      res.redirect("/profile");
                                      }
  // saved!
});
                                  

        
        
        
      
        
        
  
    
});
module.exports = router;
