
var connection=require("./connection"),
     mongoose=require("mongoose"),
     relationship=require("mongoose-relationship"),
     commentSchema= mongoose.Schema({
    
    username:String,
    text:String,
    time:{type:Date,default:Date.now()},
   
    post:{type:mongoose.Schema.Types.ObjectId , ref:"Post",childPath:"comments"}
    
    
});

commentSchema.plugin(relationship,{relationshipPathName:"post"});
var Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;
