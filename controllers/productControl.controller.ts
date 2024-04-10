import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";

export const deleteProduct = async (req:Request,res:Response, next:NextFunction) =>{
    console.log(req.body);
    const {productId} = req.body
    try {
        let deletedProduct = await snacksCatModel.findByIdAndDelete(productId);
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

export const editProduct = async (req:Request,res:Response, next:NextFunction)=>{
    console.log(req.body);
    try {
        let result = await snacksCatModel.findOne({_id:req.body.handleProductId});
        if(result){
            let product = result
            console.log(product);
            product.productName = req.body.handleProductName;
            product.productPrice = req.body.handleProductPrice
            console.log(product)
            let updatedProduct = await snacksCatModel.findByIdAndUpdate(req.body.handleProductId,product);
            if(updatedProduct){
                res.send({message:"Product has been updated successfully", status:true});
            }else{
                res.send({message:"Product updated was not successful", status:false});
            }
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false,error});
            console.log(error);
        }
    }
};