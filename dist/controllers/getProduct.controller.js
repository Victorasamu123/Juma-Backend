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
exports.getBakeryItmProduct = exports.getAlcoholicBevProduct = exports.getSnackProduct = void 0;
const snacksCat_model_1 = require("../models/category/snacksCat.model");
const alcoholicBeveragesCat_model_1 = require("../models/category/alcoholicBeveragesCat.model");
const bakeryItems_model_1 = require("../models/category/bakeryItems.model");
const getSnackProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let snacksProduct = yield snacksCat_model_1.snacksCatModel.find();
        if (snacksProduct) {
            res.send({ message: "product gotten successfully", status: true, snacksProduct });
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
exports.getSnackProduct = getSnackProduct;
const getAlcoholicBevProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let alcoholicBevProduct = yield alcoholicBeveragesCat_model_1.alcoholicBeveragesCatModel.find();
        if (alcoholicBevProduct) {
            res.send({ message: "product gotten successfully", status: true, alcoholicBevProduct });
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
exports.getAlcoholicBevProduct = getAlcoholicBevProduct;
const getBakeryItmProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let bakeryItmProduct = yield bakeryItems_model_1.bakeryItemsCatModel.find();
        if (bakeryItmProduct) {
            res.send({ mmessage: "product gotten successfully", status: true, bakeryItmProduct });
        }
        else {
        }
    }
    catch (error) {
    }
});
exports.getBakeryItmProduct = getBakeryItmProduct;
