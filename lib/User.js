var connection=require("./connection"),
 mongoose = require( 'mongoose' ),
 Schema  =mongoose.Schema,
 relationship=require("mongoose-relationship");



var userSchema= mongoose.Schema({
    
    username:{type:String,unique:true},
    password:{type:String},
    image:String,
    email:String,
    phone:String,
    galleries:[{type:Schema.Types.ObjectId, ref:"Gallery" }],
    
   
    
    
    
});

var User =mongoose.model("User",userSchema);

module.exports=User;

