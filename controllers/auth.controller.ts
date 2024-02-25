import express, { Request, Response, NextFunction } from "express";
import passport from "passport";
import { genPassword } from "../lib/passwordUtills";
import { User } from "../models/auth.modal";

export const SignUp = async(req:Request,res:Response,next:NextFunction)=>{
 console.log(req.body);
 const saltHash = await genPassword(req.body.password);
   
   const salt = saltHash.salt;
   const hash = saltHash.hash;
   console.log(salt)
   const newUser = new User({
     username:req.body.username,
     email:req.body.email,
     hash:hash,
     salt:salt,
     adminStatus:req.body.adminStatus
   });
   console.log(newUser);
  try {
   let newUserCreated = await User.create(newUser);
    if(newUserCreated){
      res.send({message:"Hurray signup was successful",status:true});
    }
  } catch (error) {
    console.log(error);
    if(error){
      res.send({message:"Oops signup was not successful",status:false});
    }
  }
};

export const signin = async(req:Request,res:Response,next:NextFunction)=>{
   
}