const mongoose=require("mongoose");
const schema=mongoose.Schema
const productSchema = new schema({
    nameproduct:String,
    price:Number,
    qte:Number,

 
});

const Product = mongoose.model('Product', productSchema);
module.exports=Product;