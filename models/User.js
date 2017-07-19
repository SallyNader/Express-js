const connection=require("./connection"),
 mongoose = require( 'mongoose' ),
 Schema  =mongoose.Schema,
 relationship=require("mongoose-relationship"),
 bcrypt=require("bcrypt-nodejs"),



 userSchema= mongoose.Schema({
    
    username:{type:String,unique:true},
    password:{type:String},
    image:String,
    email:String,
    phone:String,
    galleries:[{type:Schema.Types.ObjectId, ref:"Gallery" }],
    
   
    
    
    
});


userSchema.methods.ecryptPassword=function(password){
    
    
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
}

userSchema.methods.validPassword=function(password){
    
    
    
    return bcrypt.compareSync(password,this.password);
};

var User =mongoose.model("User",userSchema);

module.exports=User;

