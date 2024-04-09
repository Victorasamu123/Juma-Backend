import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";

export const deleteProduct = async (req:Request,res:Response, next:NextFunction) =>{
    console.log(req.body);
    try {
        let deletedProduct = await snacksCatModel.findByIdAndDelete({id:req.body.productId});
        if(deletedProduct){
            res.send({message:"Product has been deleted successfully", status:true});
        }else{
            res.send({message:"Product has been deleted was not successfully", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false,error});
        }
    }
};