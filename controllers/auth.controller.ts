import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import { genPassword } from "../lib/passwordUtills";
import { User } from "../models/auth.modal";

export const preSignUp = async(req:Request,res:Response,next:NextFunction)=>{
 console.log(req.body);
//  const saltHash = await genPassword(req.body.password);
   
//    const salt = saltHash.salt;
//    const hash = saltHash.hash;

//    res.send({salt,hash});
};