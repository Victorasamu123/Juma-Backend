import express from "express"
import { addToCart, getAddToCart, savedItems } from "../controllers/userControl.controller";

export const userControl = express.Router();

userControl.post("/addtocart",addToCart);
userControl.post("/saveditems",savedItems);
userControl.post("/getcartproduct",getAddToCart);