import express,{Request,Response,NextFunction} from "express";
import { SignUp, signin} from "../controllers/auth.controller";
import passport from "passport";
export const authRouter = express.Router();

authRouter.post("/signup",SignUp);
authRouter.post("/signin",signin);

