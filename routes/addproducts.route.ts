import express from "express";
import { myProductUploader } from "../controllers/addSnacksproducts.controller";
import { mySaucesProductUploader } from "../controllers/addSaucesCodProducts.controller";
import { myEthnicProductUploader } from "../controllers/addEthnicFoodProduct.controller";
import { myBakeryProductUploader } from "../controllers/addBakeryItemsProduct.controller";
import { mySoftDrinksProductUploader } from "../controllers/addSoftDrinksProduct.controller";
import { myAlcoholicProductUploader } from "../controllers/addAlcoholicProduct.controller";
import { myDesertProductUploader } from "../controllers/addDesertProduct.controller";

export const addProductRouter = express.Router();

addProductRouter.post("/newproduct",myProductUploader);
addProductRouter.post("/newsaucesproduct",mySaucesProductUploader);
addProductRouter.post("/newethnicproduct",myEthnicProductUploader);
addProductRouter.post("/newbakeryproduct",myBakeryProductUploader);
addProductRouter.post("/newsoftdrinksproduct",mySoftDrinksProductUploader);
addProductRouter.post("/newalcoholicproduct",myAlcoholicProductUploader);
addProductRouter.post("/newdesertproduct",myDesertProductUploader);