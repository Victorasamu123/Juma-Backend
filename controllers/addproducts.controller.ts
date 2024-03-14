import { Express, Request, Response,NextFunction } from "express";
import cloudinary from "cloudinary"
import { saucesCondimentCatModel } from "../models/category/saucesCondimentCat.model";
import { snacksCatModel } from "../models/category/snacksCat.model";
import { alcoholicBeveragesCatModel } from "../models/category/alcoholicBeveragesCat.model";
import { bakeryItemsCatModel } from "../models/category/bakeryItems.model";
import { desertSweetsCatModel } from "../models/category/desertSweetsCat.model";
import { ethnicFoodCatModel } from "../models/category/ethnicFood.model";
import { softDrinksCatModel } from "../models/category/softDrinksCat.model";

const cloudinaryV2 = cloudinary.v2

require("dotenv").config();

cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    secure:true
});

export const snacksCont = async (req:Request,res:Response,next:NextFunction) => {
    console.log(req.body);
    const mySnacksFile = req.body.productimage

    try {
        let uploaded = await cloudinaryV2.uploader.upload(mySnacksFile);
        if(uploaded){
            console.log(uploaded.secure_url);
            const myImage = uploaded.secure_url
            let newSnackProduct = new snacksCatModel({...req.body,productimage:myImage});
            
        }
    } catch (error) {
        console.log("File did not upload")
        res.send({message:"upload failed",status:false})
    }
};