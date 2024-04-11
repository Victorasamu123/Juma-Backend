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
exports.editProduct = exports.deleteProduct = void 0;
const snacksCat_model_1 = require("../models/category/snacksCat.model");
const alcoholicBeveragesCat_model_1 = require("../models/category/alcoholicBeveragesCat.model");
const bakeryItems_model_1 = require("../models/category/bakeryItems.model");
const desertSweetsCat_model_1 = require("../models/category/desertSweetsCat.model");
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    if (req.body.productCategory === "snacks") {
        const { productId } = req.body;
        try {
            let deletedProduct = yield snacksCat_model_1.snacksCatModel.findByIdAndDelete(productId);
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
    }
    else if (req.body.productCategory === "alcoholicBeverages") {
        const { productId } = req.body;
        try {
            let deletedProduct = yield alcoholicBeveragesCat_model_1.alcoholicBeveragesCatModel.findByIdAndDelete(productId);
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
    }
    else if (req.body.productCategory === "bakeryItems") {
        const { productId } = req.body;
        try {
            let deletedProduct = yield bakeryItems_model_1.bakeryItemsCatModel.findByIdAndDelete(productId);
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
    }
    else if (req.body.productCategory === "desertAndSweets") {
        const { productId } = req.body;
        try {
            let deletedProduct = yield desertSweetsCat_model_1.desertSweetsCatModel.findByIdAndDelete(productId);
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
    }
});
exports.deleteProduct = deleteProduct;
const editProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    if (req.body.handleProductCategory === "snacks") {
        try {
            let result = yield snacksCat_model_1.snacksCatModel.findOne({ _id: req.body.handleProductId });
            if (result) {
                let product = result;
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice;
                console.log(product);
                let updatedProduct = yield snacksCat_model_1.snacksCatModel.findByIdAndUpdate(req.body.handleProductId, product);
                if (updatedProduct) {
                    res.send({ message: "Product has been updated successfully", status: true });
                }
                else {
                    res.send({ message: "Product updated was not successful", status: false });
                }
            }
        }
        catch (error) {
            if (error) {
                res.send({ message: "An error occured", status: false, error });
                console.log(error);
            }
        }
    }
    else if (req.body.handleProductCategory === "alcoholicBeverages") {
        try {
            let result = yield alcoholicBeveragesCat_model_1.alcoholicBeveragesCatModel.findOne({ _id: req.body.handleProductId });
            if (result) {
                let product = result;
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice;
                console.log(product);
                let updatedProduct = yield alcoholicBeveragesCat_model_1.alcoholicBeveragesCatModel.findByIdAndUpdate(req.body.handleProductId, product);
                if (updatedProduct) {
                    res.send({ message: "Product has been updated successfully", status: true });
                }
                else {
                    res.send({ message: "Product updated was not successful", status: false });
                }
            }
        }
        catch (error) {
            if (error) {
                res.send({ message: "An error occured", status: false, error });
                console.log(error);
            }
        }
    }
    else if (req.body.handleProductCategory === "bakeryItems") {
        try {
            let result = yield bakeryItems_model_1.bakeryItemsCatModel.findOne({ _id: req.body.handleProductId });
            if (result) {
                let product = result;
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice;
                console.log(product);
                let updatedProduct = yield bakeryItems_model_1.bakeryItemsCatModel.findByIdAndUpdate(req.body.handleProductId, product);
                if (updatedProduct) {
                    res.send({ message: "Product has been updated successfully", status: true });
                }
                else {
                    res.send({ message: "Product updated was not successful", status: false });
                }
            }
        }
        catch (error) {
            if (error) {
                res.send({ message: "An error occured", status: false, error });
                console.log(error);
            }
        }
    }
    else if (req.body.handleProductCategory === "desertAndSweets") {
        try {
            let result = yield desertSweetsCat_model_1.desertSweetsCatModel.findOne({ _id: req.body.handleProductId });
            if (result) {
                let product = result;
                console.log(product);
                product.productName = req.body.handleProductName;
                product.productPrice = req.body.handleProductPrice;
                console.log(product);
                let updatedProduct = yield desertSweetsCat_model_1.desertSweetsCatModel.findByIdAndUpdate(req.body.handleProductId, product);
                if (updatedProduct) {
                    res.send({ message: "Product has been updated successfully", status: true });
                }
                else {
                    res.send({ message: "Product updated was not successful", status: false });
                }
            }
        }
        catch (error) {
            if (error) {
                res.send({ message: "An error occured", status: false, error });
                console.log(error);
            }
        }
    }
});
exports.editProduct = editProduct;
