import mongoose, { Schema } from "mongoose";

const alcoholicBeveragesCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const alcoholicBeveragesCatModel = mongoose.model("alcohBeverCat_collections", alcoholicBeveragesCatSchema);