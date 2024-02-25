import express, { Express,Request, Response, } from "express";
import mongoose from "mongoose";
import session, { SessionData } from "express-session";
import cors from "cors";
import passport from "passport";
import MongoStore from "connect-mongo";
import { authRouter } from "./routes/auth.route";


interface CustomSession extends session.Session{
    views?:number;
};

declare module "express-session" {
    interface SessionData{
        views? : number,
        passport?:any
    }
};

const app = express();

app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT || 3500
const MONGODB = process.env.MONGODB
const SESSIONSECRET = process.env.SESSIONSECRET

require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const store = new MongoStore({
    mongoUrl:MONGODB,
    collectionName:"sessions"
});

app.use(session({
    secret:SESSIONSECRET as string,
    resave:false,
    saveUninitialized:true,
    store:store,
    cookie:{
        maxAge: 1000 * 60 * 60 *24
    },

}));

app.use(passport.initialize());
app.use(passport.session());

// app.use((req,res,next)=>{
//     // console.log(req.session);
//     // console.log(req.user);
//     next();
// })


app.use("/auth",authRouter);

app.get("/", (req :Request<{session: SessionData}>,res:Response)=>{
    if(!req.session!.views){
        req.session!.views = req.session!.views as number + 1
    } else{
        req.session!.views += 1;
    };

res.send(`You visited ${req.session!.views} times`);
});

app.listen(PORT , ()=>{
    console.log(`port listening at port ${PORT}`);
});