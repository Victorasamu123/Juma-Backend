import mongoose, { Schema } from "mongoose";

const authSchema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String,unique:true},
    hash:{type:String},
    salt:{type:String},
    adminStatus:{required:true,type:Boolean}
});

export const User = mongoose.model("signup_collectioms",authSchema);
