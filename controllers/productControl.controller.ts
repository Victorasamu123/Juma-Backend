import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";

export const deleteProduct = (req:Request,res:Response, next:NextFunction) =>{
    console.log(req.body);
    try {
        let deletedProduct = snacksCatModel.findByIdAndDelete({id:req.body.productId});
            res.send({message:"Product has been deleted successfully", status:true});
    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
    }
};