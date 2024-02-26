import mongoose, { Schema } from "mongoose";

const softDrinksCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const softDrinksCatModel = mongoose.model("softDrinksCat_collections", softDrinksCatSchema);