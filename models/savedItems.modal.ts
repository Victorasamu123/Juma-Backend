import mongoose ,{Schema} from "mongoose";

const savedItemsSchema = new Schema({
    productImage:{type:String,required:true},
    productName:{type:String,required:true},
    productCategory:{type:String,required:true},
    productdescription:{type:String,required:true},
    productPrice:{type:String,required:true},
});

export const savedItemsModal = mongoose.model("saveditems_collections",savedItemsSchema);