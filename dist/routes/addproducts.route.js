"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const addproducts_controller_1 = require("../controllers/addproducts.controller");
exports.addProductRouter = express_1.default.Router();
exports.addProductRouter.post("/newproduct", addproducts_controller_1.myProductUploader);
