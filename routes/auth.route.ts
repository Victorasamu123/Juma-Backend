import express,{Request,Response,NextFunction} from "express";
import { SignUp } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/signup",SignUp);