import mongoose ,{Schema} from "mongoose";

const addToCartSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true},
});

export const addToCartModal = mongoose.model("addtocart_collections",addToCartSchema);