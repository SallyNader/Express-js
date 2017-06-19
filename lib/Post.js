

var mongoose=require("mongoose");
var connection=require("./connection");
 var   relationship = require("mongoose-relationship");





var postSchema=mongoose.Schema({
    
            text:String,
            date:Date,
            username:String,
            comments:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}]
    
});

//postSchema.plugin(relationship,{relationshipPathName:"comments"});


var Post =mongoose.model("Post",postSchema);

module.exports=Post;