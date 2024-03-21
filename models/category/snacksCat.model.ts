import mongoose, { Schema } from "mongoose";

const productCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const productCatModel = mongoose.model("productCat_collections",productCatSchema);