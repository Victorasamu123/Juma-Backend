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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myEthnicProductUploader = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const ethnicFood_model_1 = require("../models/category/ethnicFood.model");
const cloudinaryV2 = cloudinary_1.default.v2;
require("dotenv").config();
cloudinaryV2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});
const myEthnicProductUploader = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const myProductFile = req.body.productImage;
    try {
        let uploaded = yield cloudinaryV2.uploader.upload(myProductFile);
        if (uploaded) {
            console.log(uploaded.secure_url);
            const myImage = uploaded.secure_url;
            let Product = new ethnicFood_model_1.ethnicFoodCatModel(Object.assign(Object.assign({}, req.body), { productImage: myImage }));
            let newProduct = yield ethnicFood_model_1.ethnicFoodCatModel.create(Product);
            if (newProduct) {
                res.send({ message: "product upload was successful" });
            }
            else {
                console.log("File did not upload");
                res.send({ message: "upload failed", status: false });
            }
        }
    }
    catch (error) {
        console.log("File did not upload");
        res.send({ message: "upload failed", status: false });
    }
});
exports.myEthnicProductUploader = myEthnicProductUploader;
