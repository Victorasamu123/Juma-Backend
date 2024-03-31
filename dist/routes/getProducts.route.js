"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const getProduct_controller_1 = require("../controllers/getProduct.controller");
exports.getProductRouter = express_1.default.Router();
exports.getProductRouter.get("/getsnacks", getProduct_controller_1.getSnackProduct);
exports.getProductRouter.get("/getalcoholicbev", getProduct_controller_1.getAlcoholicBevProduct);
exports.getProductRouter.get("/getbakeryitm", getProduct_controller_1.getBakeryItmProduct);
exports.getProductRouter.get("/getdesertswt", getProduct_controller_1.getDesertSwtProduct);
exports.getProductRouter.get("/getethnicfood", getProduct_controller_1.getEthnicFoodProduct);
exports.getProductRouter.get("/getsaucescod", getProduct_controller_1.getSaucesCodProduct);
exports.getProductRouter.get("/getsoftdrks", getProduct_controller_1.getSoftDrksProduct);
