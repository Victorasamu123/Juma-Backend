import express from "express"
import { getAlcoholicBevProduct, getBakeryItmProduct, getDesertSwtProduct, getEthnicFoodProduct, getSaucesCodProduct, getSnackProduct, getSoftDrksProduct } from "../controllers/getProduct.controller";

export const getProductRouter = express.Router();

getProductRouter.get("/getsnacks",getSnackProduct);
getProductRouter.get("/getalcoholicbev",getAlcoholicBevProduct);
getProductRouter.get("/getbakeryitm",getBakeryItmProduct);
getProductRouter.get("/getdesertswt",getDesertSwtProduct);
getProductRouter.get("/getethnicfood",getEthnicFoodProduct);
getProductRouter.get("/getsaucescod",getSaucesCodProduct);
getProductRouter.get("/getsoftdrks",getSoftDrksProduct); 