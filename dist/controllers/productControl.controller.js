"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const snacksCat_model_1 = require("../models/category/snacksCat.model");
const deleteProduct = (req, res, next) => {
    console.log(req.body);
    try {
        let deletedProduct = snacksCat_model_1.snacksCatModel.findByIdAndDelete({ id: req.body.productId });
        res.send({ message: "Product has been deleted successfully", status: true });
    }
    catch (error) {
        if (error) {
            res.send({ message: "An error occured", status: false });
        }
    }
};
exports.deleteProduct = deleteProduct;
