import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";
import { alcoholicBeveragesCatModel } from "../models/category/alcoholicBeveragesCat.model";
import { bakeryItemsCatModel } from "../models/category/bakeryItems.model";
import { desertSweetsCatModel } from "../models/category/desertSweetsCat.model";
import { ethnicFoodCatModel } from "../models/category/ethnicFood.model";
import { saucesCondimentCatModel } from "../models/category/saucesCondimentCat.model";
import { softDrinksCatModel } from "../models/category/softDrinksCat.model";


export const getSnackProduct = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        let snacksProduct = await snacksCatModel.find();
        if(snacksProduct){
           res.send({message:"product gotten successfully", status:true, snacksProduct});
        }else {
            res.send({message:"No product found!!!", status:false});
        }

    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
    }
};

export const getAlcoholicBevProduct = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        let alcoholicBevProduct = await alcoholicBeveragesCatModel.find();
        if(alcoholicBevProduct){ 
            res.send({message:"product gotten successfully", status:true, alcoholicBevProduct});
        }else {
            res.send({message:"No product found!!!", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
    }
}

export const getBakeryItmProduct = async(req:Request, res:Response, next:NextFunction)=>{
   try {
    let bakeryItmProduct = await bakeryItemsCatModel.find();
    if (bakeryItmProduct) {
        res.send({mmessage:"product gotten successfully", status:true, bakeryItmProduct});
    } else {
        res.send({message:"No product found!!!", status:false});
    }
   } catch (error) {
    if(error){
        res.send({message:"An error occured", status:false});
    }
   }
}

export const getDesertSwtProduct = async(req:Request, res:Response, next:NextFunction)=>{
   try {
    let desertSwtProduct = await desertSweetsCatModel.find();
    if (desertSwtProduct) {
        res.send({message:"product gotten successfully", status:true, desertSwtProduct});
    } else {
        res.send({message:"No product found!!!", status:false});
    }
   } catch (error) {
    if(error){
        res.send({message:"An error occured", status:false});
    }
   }
}

export const getEthnicFoodProduct = async(req:Request, res:Response, next:NextFunction)=>{
   try {
    let ethnicFoodProduct = await ethnicFoodCatModel.find();
    if(ethnicFoodProduct){
      res.send({message:"product gotten successfully", status:true, ethnicFoodProduct});
    }else{
        res.send({message:"No product found!!!", status:false});
    }
   } catch (error) {
    if(error){
        res.send({message:"An error occured", status:false});
    }
   }
}

export const getSaucesCodProduct= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        let saucesCodProduct = await saucesCondimentCatModel.find();
        if(saucesCodProduct){
            res.send({message:"product gotten successfully", status:true, saucesCodProduct});
        }else{
            res.send({message:"No product found!!!", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
    }
}

export const getSoftDrksProduct = async(req:Request, res:Response, next:NextFunction)=>{
   try {
    let softDrksProduct = await softDrinksCatModel.find();
    if(softDrksProduct){
        res.send({message:"product gotten successfully", status:true, softDrksProduct});
    }else{
        res.send({message:"No product found!!!", status:false});
    }
   } catch (error) {
    if(error){
        res.send({message:"An error occured", status:false});
    }
   }
}