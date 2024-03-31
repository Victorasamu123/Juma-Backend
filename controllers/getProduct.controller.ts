import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";
import { alcoholicBeveragesCatModel } from "../models/category/alcoholicBeveragesCat.model";
import { bakeryItemsCatModel } from "../models/category/bakeryItems.model";


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
        
    }
   } catch (error) {
    
   }
}