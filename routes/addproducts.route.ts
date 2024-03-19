import express from "express";
import { myProductUploader } from "../controllers/addproducts.controller";

export const addProductRouter = express.Router();

addProductRouter.post("/newproduct",myProductUploader);