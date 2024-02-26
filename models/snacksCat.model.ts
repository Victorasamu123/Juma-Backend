import mongoose, { Schema } from "mongoose";

const snacksCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true},
});

export const snacksCatModel = mongoose.model("snacksCat_collections",snacksCatSchema);