import mongoose, { Schema } from "mongoose";

const saucesCondimentCatSchema= new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productDescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const saucesCondimentCatModel = mongoose.model("saucesCondimentCat_collections",saucesCondimentCatSchema);