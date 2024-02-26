import mongoose, { Schema } from "mongoose";

const desertSweetsCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const desertSweetsCatModel = mongoose.model("desertSweetsCat_collections",desertSweetsCatSchema);