"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControl = void 0;
const express_1 = __importDefault(require("express"));
const userControl_controller_1 = require("../controllers/userControl.controller");
exports.userControl = express_1.default.Router();
exports.userControl.post("/addtocart", userControl_controller_1.addToCart);
exports.userControl.post("/saveditems", userControl_controller_1.savedItems);
exports.userControl.post("/getcartproduct", userControl_controller_1.getAddToCart);
exports.userControl.post("/getsavedproduct", userControl_controller_1.getSavedItems);
exports.userControl.post("/deleteallitems", userControl_controller_1.deleteAllCart);
exports.userControl.post("/deleteallsaveditems", userControl_controller_1.deleteAllSavedItems);
exports.userControl.post("/deleteoneproductincart", userControl_controller_1.deleteOneProductInCart);
exports.userControl.post("/deleteoneproductinsaveditems", userControl_controller_1.deleteOneProductInSavedItems);
exports.userControl.post("/updatequantityofproduct", userControl_controller_1.updateQuantityOfProduct);
