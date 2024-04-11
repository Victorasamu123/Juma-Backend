import { Express, Request, Response, NextFunction } from "express";
import { snacksCatModel } from "../models/category/snacksCat.model";
import { alcoholicBeveragesCatModel } from "../models/category/alcoholicBeveragesCat.model";
import { bakeryItemsCatModel } from "../models/category/bakeryItems.model";
import { desertSweetsCatModel } from "../models/category/desertSweetsCat.model";


export const deleteProduct = async (req:Request,res:Response, next:NextFunction) =>{
    console.log(req.body);
     if(req.body.productCategory === "snacks"){
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
     }else if(req.body.productCategory === "alcoholicBeverages"){
        const {productId} = req.body
        try {
            let deletedProduct = await alcoholicBeveragesCatModel.findByIdAndDelete(productId);
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
     }else if(req.body.productCategory === "bakeryItems"){
        const {productId} = req.body
        try {
            let deletedProduct = await bakeryItemsCatModel.findByIdAndDelete(productId);
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
     }else if(req.body.productCategory === "desertAndSweets"){
        const {productId} = req.body
        try {
            let deletedProduct = await desertSweetsCatModel.findByIdAndDelete(productId);
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
     }

};

export const editProduct = async (req:Request,res:Response, next:NextFunction)=>{
    console.log(req.body);
    if(req.body.handleProductCategory === "snacks"){
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
    }else if(req.body.handleProductCategory === "alcoholicBeverages"){
        try {
            let result = await alcoholicBeveragesCatModel.findOne({_id:req.body.handleProductId});
            if(result){
                let product = result
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice
                console.log(product)
                let updatedProduct = await alcoholicBeveragesCatModel.findByIdAndUpdate(req.body.handleProductId,product);
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
    }else if(req.body.handleProductCategory === "bakeryItems"){
        try {

            let result = await bakeryItemsCatModel.findOne({_id:req.body.handleProductId});
            if(result){
                let product = result
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice
                console.log(product)
                let updatedProduct = await bakeryItemsCatModel.findByIdAndUpdate(req.body.handleProductId,product);
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
    }else if(req.body.handleProductCategory === "desertAndSweets"){
        try {

            let result = await desertSweetsCatModel.findOne({_id:req.body.handleProductId});
            if(result){
                let product = result
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice
                console.log(product)
                let updatedProduct = await desertSweetsCatModel.findByIdAndUpdate(req.body.handleProductId,product);
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
    }
};