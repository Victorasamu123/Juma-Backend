import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { genPassword, validPassword } from "../lib/passwordUtills";
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
   console.log(req.body);
   let { email, password} = req.body
   console.log(email,password);
   let user = await User.findOne({email:email});
   console.log(user);
   try {
     if(!user){
      res.send({message:"You enter an invalid Email", status:false});
     } else if(user){
       const isvalid = await validPassword(password, user.hash as string , user.salt as string)
       console.log(isvalid);
       if(isvalid){
         let token = jwt.sign({email},"your deepest secret",{expiresIn:"1h"});
         res.send({message:"User Signed in Successfully",status:true,token,user});
        }
        else{
         res.send({message:"You enter wrong Password",status:false});
       }
     }
   } catch (error) {
    res.send({message:"signin not successfull",status:false});
   }
};

export const tokenVerification = async(req:Request, res:Response,next:NextFunction)=>{
    let token: string = req.headers.authorization?.split(" ")[0] ?? "";
   let verified = jwt.verify(token,"your deepest secret")
   try {
    if(verified){
      console.log(verified);
      res.send({message:"Congratulations verification was successful",status:true})
    }else{
      res.send({message:"Oops token verification failed please signin again",status:false})
    }
   } catch (error) {
    res.send({message:"Error occured",status:false})
   }
}

