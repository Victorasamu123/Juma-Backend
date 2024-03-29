import express from "express";
import { myProductUploader } from "../controllers/addSnacksproducts.controller";

export const addProductRouter = express.Router();

addProductRouter.post("/newproduct",myProductUploader);