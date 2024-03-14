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
exports.snacksCont = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const snacksCat_model_1 = require("../models/category/snacksCat.model");
const cloudinaryV2 = cloudinary_1.default.v2;
require("dotenv").config();
cloudinaryV2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});
const snacksCont = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const mySnacksFile = req.body.productimage;
    try {
        let uploaded = yield cloudinaryV2.uploader.upload(mySnacksFile);
        if (uploaded) {
            console.log(uploaded.secure_url);
            const myImage = uploaded.secure_url;
            let newSnackProduct = new snacksCat_model_1.snacksCatModel(Object.assign(Object.assign({}, req.body), { productimage: myImage }));
        }
    }
    catch (error) {
        console.log("File did not upload");
        res.send({ message: "upload failed", status: false });
    }
});
exports.snacksCont = snacksCont;
