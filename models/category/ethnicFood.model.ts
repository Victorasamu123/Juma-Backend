import mongoose, { Schema }  from "mongoose";

const ethnicFoodCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const ethnicFoodCatModel = mongoose.model("ethnicFoodCat_collections",ethnicFoodCatSchema);