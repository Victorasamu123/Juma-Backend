"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlRouter = void 0;
const express_1 = __importDefault(require("express"));
const productControl_controller_1 = require("../controllers/productControl.controller");
exports.controlRouter = express_1.default.Router();
exports.controlRouter.post("/deleteproduct", productControl_controller_1.deleteProduct);
exports.controlRouter.post("/editproduct", productControl_controller_1.editProduct);
