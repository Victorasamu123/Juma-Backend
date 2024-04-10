import express from "express"
import { deleteProduct, editProduct } from "../controllers/productControl.controller";

export const controlRouter = express.Router();

controlRouter.post("/deleteproduct", deleteProduct);
controlRouter.post("/editproduct",editProduct);