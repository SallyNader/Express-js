

const mongoose=require("mongoose"),
    connection=require("./connection"),
    relationship = require("mongoose-relationship"),

    postSchema=mongoose.Schema({
    
            text:String,
            date:Date,
            username:String,
            comments:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}]
    
}),
  
Post =mongoose.model("Post",postSchema);

module.exports=Post;