import { Request, Response,NextFunction } from "express";
import { addToCartModal } from "../models/addToCart.model";
import { savedItemsModal } from "../models/savedItems.modal";

export const addToCart = async(req:Request, res:Response,next:NextFunction)=>{
    console.log(req.body);
    let newProductToCart = new addToCartModal(req.body);
    try {
        let productAdded = await addToCartModal.create(newProductToCart);
        if(productAdded){
            res.send({message:"Product was added to cart",status:true});
        }
    } catch (error) {
        if(error){
            res.send({message:"product was not to cart",status:false});
          }
    }
};


export const savedItems = async(req:Request,res:Response, next:NextFunction)=>{
    console.log(req.body);
    let newProductToSavedItems = new savedItemsModal(req.body);
    try {
        let productSaved = await savedItemsModal.create(newProductToSavedItems);
        if (productSaved) {
            res.send({message:"Product has been saved",status:true});
        }
    } catch (error) {
        if(error){
            res.send({message:"product was not saved",status:false});
          }
    }
};