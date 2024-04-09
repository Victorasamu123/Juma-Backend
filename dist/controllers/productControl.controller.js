"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const snacksCat_model_1 = require("../models/category/snacksCat.model");
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { productId } = req.body;
    try {
        let deletedProduct = yield snacksCat_model_1.snacksCatModel.findByIdAndDelete({ productId });
        if (deletedProduct) {
            res.send({ message: "Product has been deleted successfully", status: true });
        }
        else {
            res.send({ message: "Product has been deleted was not successfully", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured", status: false, error });
        }
    }
});
exports.deleteProduct = deleteProduct;
