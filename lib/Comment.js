
var connection=require("./connection");
var mongoose=require("mongoose");
var relationship=require("mongoose-relationship");
var commentSchema= mongoose.Schema({
    
    username:String,
    text:String,
    time:{type:Date,default:Date.now()},
   
    post:{type:mongoose.Schema.Types.ObjectId , ref:"Post",childPath:"comments"}
    
    
});

commentSchema.plugin(relationship,{relationshipPathName:"post"});
var Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;
