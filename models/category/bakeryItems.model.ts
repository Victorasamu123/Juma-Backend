import mongoose, {Schema} from "mongoose";

const bakeryItemsCatSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true}
});

export const bakeryItemsCatModel = mongoose.model("bakeryItemsCat_collections", bakeryItemsCatSchema);