const mongoose=require("mongoose");
const schema=mongoose.Schema
const userSchema = new schema({
    name:String,
    lastname:String,
    age:Number,
    dateofbirth:String,
    img:String,
    email:{type:String, unique:true},
    gender:{type:String, default:"female"},
    isAdmin:Boolean,
    scores:Array,

 
});

const User = mongoose.model('User', userSchema);
module.exports=User;