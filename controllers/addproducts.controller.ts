import { Express, Request, Response,NextFunction } from "express";
import cloudinary from "cloudinary"
import { saucesCondimentCatModel } from "../models/category/saucesCondimentCat.model";
import { snacksCatModel } from "../models/category/snacksCat.model";
import { alcoholicBeveragesCatModel } from "../models/category/alcoholicBeveragesCat.model";
import { bakeryItemsCatModel } from "../models/category/bakeryItems.model";
import { desertSweetsCatModel } from "../models/category/desertSweetsCat.model";
import { ethnicFoodCatModel } from "../models/category/ethnicFood.model";
import { softDrinksCatModel } from "../models/category/softDrinksCat.model";

const cloudinaryV2 = cloudinary.v2

require("dotenv").config();

cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    secure:true
});

