import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import { genPassword } from "../lib/passwordUtills";
import { User } from "../models/auth.modal";

export const SignUp = async(req:Request,res:Response,next:NextFunction)=>{
 console.log(req.body);
 const saltHash = await genPassword(req.body.password);
   
   const salt = saltHash.salt;
   const hash = saltHash.hash;

   const newUser = new User({
     username:req.body.username,
     email:req.body.email,
     hash:hash,
     sait:salt,
     adminStatus:req.body.adminStatus
   });

   newUser.save().then((user)=>{
    if(user){
        res.send({message:"Hurray signup was successful",status:true });
    } else{
        res.send({message:"Signup was not successful, please try again",status:false });
    }
   });
};