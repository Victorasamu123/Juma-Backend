import express from "express"
import { getAlcoholicBevProduct, getBakeryItmProduct, getSnackProduct } from "../controllers/getProduct.controller";

export const getProductRouter = express.Router();

getProductRouter.get("/getsnacks",getSnackProduct);
getProductRouter.get("/getalcoholicbev",getAlcoholicBevProduct);
getProductRouter.get("/getbakeryitm",getBakeryItmProduct);