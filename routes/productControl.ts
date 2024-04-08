import express from "express"
import { deleteProduct } from "../controllers/productControl.controller";

export const controlRouter = express.Router();

controlRouter.post("/deleteproduct", deleteProduct);