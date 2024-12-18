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
    try {
        let productInSaved = await savedItemsModal.findOne({ productName : req.body.productName });
        if (productInSaved) {
            res.send({message:"Product has been saved already",status:false});
        }else {
            let newProductToSavedItems = new savedItemsModal(req.body);
            let productSaved = await savedItemsModal.create(newProductToSavedItems);
            if (productSaved) {
                res.send({message:"Product was added to saved successfully",status:true});
            }else {
                res.send({message:"Product has not been saved",status:false});
            }
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

export const getSavedItems = async( req:Request,res:Response, next:NextFunction)=>{
    let { userId } = req.body
    try {
        let savedProducts = await savedItemsModal.find({userId:userId});
        if(savedProducts){
            res.send({message:"saved items sent successfully", status:true,savedProducts});
        }else {
            res.send({message:"No product found!!!", status:false});
        }
    } catch(error) {
        if(error){
            res.send({message:"An error occured", status:false});
        }
    }
}
        
export const deleteAllCart = async(req:Request, res:Response,next:NextFunction)=>{
            console.log(req.body);
            try {
                let deleteAll = await addToCartModal.deleteMany({userId:req.body.userId});
                if (deleteAll) {
                    res.send({message: "All items deleted", status:true});
                } else {
                    res.send({message:"Items was not deleted", status:false});
                }
            } catch (error) {
                if(error){
                    res.send({message:"An error occured while deleting",status:false});
                  }
            }
};

export const deleteAllSavedItems = async(req:Request, res:Response,next:NextFunction)=>{
      console.log(req.body);
      try {
        let deleteAll = await savedItemsModal.deleteMany({userId:req.body.userId});
        if (deleteAll) {
            res.send({message: "All items deleted", status:true});
        } else {
            res.send({message:"Items was not deleted", status:false});
        }
      } catch (error) {
        if(error){
            res.send({message:"An error occured while deleting",status:false});
          }
      }
};

export const deleteOneProductInCart = async (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body);
    try {
        let deleteOneProduct = await addToCartModal.findByIdAndDelete(req.body.Id)
        if (deleteOneProduct) {
            res.send({message: "Product was deleted successfully", status:true});
        } else {
            res.send({message:"product was not deleted", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured while deleting",status:false});
          }
      }
}

export const deleteOneProductInSavedItems = async (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body);
    try {
        let deleteOneProduct = await savedItemsModal.findByIdAndDelete(req.body.Id);
        if (deleteOneProduct) {
            res.send({message: "Product was deleted successfully", status:true});
        } else {
            res.send({message:"product was not deleted", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured while deleting",status:false});
          }
    }
}

export const updateQuantityOfProduct = async (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body);
    try {
        let updatedQuantityOfProduct = await addToCartModal.findByIdAndUpdate(req.body.Id,{ quantityOfProduct:req.body.newQuantityOfProduct});
        if(updatedQuantityOfProduct){
            console.log(updatedQuantityOfProduct,res);
            res.send({message: "update successful", status:true});
        } else {
            res.send({message:"product was not updated", status:false});
        }
    } catch (error) {
        if(error){
            res.send({message:"An error occured while updating",status:false});
            console.log(error);
          }   
    }
}