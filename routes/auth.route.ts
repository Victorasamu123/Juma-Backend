import express,{Request,Response,NextFunction} from "express";
import { preSignUp } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/presignup",preSignUp);