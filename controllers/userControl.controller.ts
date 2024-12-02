import { Request, Response,NextFunction } from "express";
import { addToCartModal } from "../models/addToCart.model";
import { savedItemsModal } from "../models/savedItems.modal";

export const addToCart = async(req:Request, res:Response,next:NextFunction)=>{
    console.log(req.body);
    try {
      let productInCart = await addToCartModal.findOne({ productName : req.body.productName});
        if(productInCart){
            res.send({message:"Product is already in cart",status:false});
        } else {
            let newProductToCart = new addToCartModal(req.body);
            let productAdded = await addToCartModal.create(newProductToCart);
            if (productAdded){
                res.send({message:"Product was added to cart successfully",status:true});
            } else{
                res.send({message:"Product was not added to cart",status:false});
            }
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

export const getAddToCart = async(req:Request,res:Response, next:NextFunction)=>{
    let { userId} = req.body
     try {
       let cartProducts = await addToCartModal.find({userId:userId});
       if(cartProducts){
          res.send({message:"cart sent successfully", status:true,cartProducts});
       }else{
        res.send({message:"No product found!!!", status:false});
       }
     } catch (error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
     }
}