import express from "express"
import { addToCart, deleteAllCart, deleteAllSavedItems, deleteOneProductInCart, deleteOneProductInSavedItems, getAddToCart, getSavedItems, savedItems, updateQuantityOfProduct } from "../controllers/userControl.controller";

export const userControl = express.Router();

userControl.post("/addtocart",addToCart);
userControl.post("/saveditems",savedItems);
userControl.post("/getcartproduct",getAddToCart);
userControl.post("/getsavedproduct",getSavedItems);
userControl.post("/deleteallitems",deleteAllCart);
userControl.post("/deleteallsaveditems",deleteAllSavedItems);
userControl.post("/deleteoneproductincart",deleteOneProductInCart);
userControl.post("/deleteoneproductinsaveditems", deleteOneProductInSavedItems);
userControl.post("/updatequantityofproduct",updateQuantityOfProduct);
