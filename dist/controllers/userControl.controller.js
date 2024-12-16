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
exports.updateQuantityOfProduct = exports.deleteOneProductInSavedItems = exports.deleteOneProductInCart = exports.deleteAllSavedItems = exports.deleteAllCart = exports.getSavedItems = exports.getAddToCart = exports.savedItems = exports.addToCart = void 0;
const addToCart_model_1 = require("../models/addToCart.model");
const savedItems_modal_1 = require("../models/savedItems.modal");
const addToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let productInCart = yield addToCart_model_1.addToCartModal.findOne({ productName: req.body.productName });
        if (productInCart) {
            res.send({ message: "Product is already in cart", status: false });
        }
        else {
            let newProductToCart = new addToCart_model_1.addToCartModal(req.body);
            let productAdded = yield addToCart_model_1.addToCartModal.create(newProductToCart);
            if (productAdded) {
                res.send({ message: "Product was added to cart successfully", status: true });
            }
            else {
                res.send({ message: "Product was not added to cart", status: false });
            }
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "product was not to cart", status: false });
        }
    }
});
exports.addToCart = addToCart;
const savedItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let productInSaved = yield savedItems_modal_1.savedItemsModal.findOne({ productName: req.body.productName });
        if (productInSaved) {
            res.send({ message: "Product has been saved already", status: false });
        }
        else {
            let newProductToSavedItems = new savedItems_modal_1.savedItemsModal(req.body);
            let productSaved = yield savedItems_modal_1.savedItemsModal.create(newProductToSavedItems);
            if (productSaved) {
                res.send({ message: "Product was added to saved successfully", status: true });
            }
            else {
                res.send({ message: "Product has not been saved", status: false });
            }
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "product was not saved", status: false });
        }
    }
});
exports.savedItems = savedItems;
const getAddToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId } = req.body;
    try {
        let cartProducts = yield addToCart_model_1.addToCartModal.find({ userId: userId });
        if (cartProducts) {
            res.send({ message: "cart sent successfully", status: true, cartProducts });
        }
        else {
            res.send({ message: "No product found!!!", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured", status: false });
        }
    }
});
exports.getAddToCart = getAddToCart;
const getSavedItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId } = req.body;
    try {
        let savedProducts = yield savedItems_modal_1.savedItemsModal.find({ userId: userId });
        if (savedProducts) {
            res.send({ message: "saved items sent successfully", status: true, savedProducts });
        }
        else {
            res.send({ message: "No product found!!!", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured", status: false });
        }
    }
});
exports.getSavedItems = getSavedItems;
const deleteAllCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let deleteAll = yield addToCart_model_1.addToCartModal.deleteMany({ userId: req.body.userId });
        if (deleteAll) {
            res.send({ message: "All items deleted", status: true });
        }
        else {
            res.send({ message: "Items was not deleted", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured while deleting", status: false });
        }
    }
});
exports.deleteAllCart = deleteAllCart;
const deleteAllSavedItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let deleteAll = yield savedItems_modal_1.savedItemsModal.deleteMany({ userId: req.body.userId });
        if (deleteAll) {
            res.send({ message: "All items deleted", status: true });
        }
        else {
            res.send({ message: "Items was not deleted", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured while deleting", status: false });
        }
    }
});
exports.deleteAllSavedItems = deleteAllSavedItems;
const deleteOneProductInCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let deleteOneProduct = yield addToCart_model_1.addToCartModal.findByIdAndDelete(req.body.Id);
        if (deleteOneProduct) {
            res.send({ message: "Product was deleted successfully", status: true });
        }
        else {
            res.send({ message: "product was not deleted", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured while deleting", status: false });
        }
    }
});
exports.deleteOneProductInCart = deleteOneProductInCart;
const deleteOneProductInSavedItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let deleteOneProduct = yield savedItems_modal_1.savedItemsModal.findByIdAndDelete(req.body.Id);
        if (deleteOneProduct) {
            res.send({ message: "Product was deleted successfully", status: true });
        }
        else {
            res.send({ message: "product was not deleted", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured while deleting", status: false });
        }
    }
});
exports.deleteOneProductInSavedItems = deleteOneProductInSavedItems;
const updateQuantityOfProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        let updatedQuantityOfProduct = yield addToCart_model_1.addToCartModal.findByIdAndUpdate(req.body.Id, { quantityOfProduct: req.body.quantityOfProduct });
        if (updatedQuantityOfProduct) {
            res.send({ message: "update successful", status: true });
        }
        else {
            res.send({ message: "product was not updated", status: false });
        }
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured while updating", status: false });
        }
    }
});
exports.updateQuantityOfProduct = updateQuantityOfProduct;
