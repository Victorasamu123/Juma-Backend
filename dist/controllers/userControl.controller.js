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
exports.getAddToCart = exports.savedItems = exports.addToCart = void 0;
const addToCart_model_1 = require("../models/addToCart.model");
const savedItems_modal_1 = require("../models/savedItems.modal");
const addToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let newProductToCart = new addToCart_model_1.addToCartModal(req.body);
    try {
        let productAdded = yield addToCart_model_1.addToCartModal.create(newProductToCart);
        if (productAdded) {
            res.send({ message: "Product was added to cart", status: true });
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
    let newProductToSavedItems = new savedItems_modal_1.savedItemsModal(req.body);
    try {
        let productSaved = yield savedItems_modal_1.savedItemsModal.create(newProductToSavedItems);
        if (productSaved) {
            res.send({ message: "Product has been saved", status: true });
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
