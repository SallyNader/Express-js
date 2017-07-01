
var connection=require("./connection"),
     mongoose = require( 'mongoose' ),
     Schema  =mongoose.Schema,
     relationship=require("mongoose-relationship"),


 gallerySchema=mongoose.Schema({
    
    imageName:{type:String ,required:true},
    username:{type:String ,required:true},
    description:String,
     user:{type:Schema.Types.ObjectId, ref:"User" , childPath:"galleris"}
//    date:Date
    
});

gallerySchema.plugin(relationship,{relationshipPathName:"user"});

var Gallery=mongoose.model("Gallery",gallerySchema);
module.exports=Gallery;