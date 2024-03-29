import { Express, Request, Response,NextFunction } from "express";
import cloudinary from "cloudinary"
import { saucesCondimentCatModel } from "../models/category/saucesCondimentCat.model";

const cloudinaryV2 = cloudinary.v2

require("dotenv").config();

cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    secure:true
});

export const mySaucesProductUploader = async (req:Request,res:Response,next:NextFunction) =>{
    console.log(req.body);
    const myProductFile = req.body.productImage

    try {
        let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
        if(uploaded){
            console.log(uploaded.secure_url);
            const myImage = uploaded.secure_url
            let Product = new saucesCondimentCatModel({...req.body,productImage:myImage});
            let newProduct = await saucesCondimentCatModel.create(Product);
            if(newProduct){
                res.send({message:"product upload was successful"});
            }else{
                console.log("File did not upload")
                res.send({message:"upload failed",status:false})
            }
        }
    } catch (error) {
        console.log("File did not upload")
        res.send({message:"upload failed",status:false});
    }
}