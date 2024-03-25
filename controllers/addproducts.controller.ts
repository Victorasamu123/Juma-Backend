import { Express, Request, Response,NextFunction } from "express";
import cloudinary from "cloudinary"
import { saucesCondimentCatModel } from "../models/category/saucesCondimentCat.model";
import { productCatModel } from "../models/category/snacksCat.model";
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

export const myProductUploader = async (req:Request,res:Response,next:NextFunction) => {
    console.log(req.body);
    if(req.body.productCategory === "snacks"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new productCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false})
        }
    }else if(req.body.productCategory === "saucesAndCondiments"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new saucesCondimentCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else if(req.body.productCategory === "ethnicFood"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new ethnicFoodCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else if(req.body.productCategory === "bakeryItems"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new bakeryItemsCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else if(req.body.productCategory === "softDrinks"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new softDrinksCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else if(req.body.productCategory === "alcoholicBeverages"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new alcoholicBeveragesCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else if(req.body.productCategory === "desertAndSweets"){
        const myProductFile = req.body.productImage
        try {
            let uploaded = await cloudinaryV2.uploader.upload(myProductFile);
            if(uploaded){
                console.log(uploaded.secure_url);
                const myImage = uploaded.secure_url
                let newProduct = new desertSweetsCatModel({...req.body,productImage:myImage});
                if(newProduct){
                    res.send({message:"product upload was successful"});
                }
            }
        } catch (error) {
            console.log("File did not upload")
            res.send({message:"upload failed",status:false});
        }
    }else{
        res.send({message:"invalid category"});
    }
    
};