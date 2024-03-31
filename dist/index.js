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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const auth_route_1 = require("./routes/auth.route");
const addproducts_route_1 = require("./routes/addproducts.route");
const getProducts_route_1 = require("./routes/getProducts.route");
;
;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
require("dotenv").config();
const PORT = process.env.PORT || 3500;
const MONGODB = process.env.MONGODB;
const SESSIONSECRET = process.env.SESSIONSECRET;
require("./config/passport");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const store = new connect_mongo_1.default({
    mongoUrl: MONGODB,
    collectionName: "sessions"
});
app.use((0, express_session_1.default)({
    secret: SESSIONSECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionToMongoose = yield mongoose_1.default.connect(MONGODB);
        if (connectionToMongoose) {
            console.log("connection to mongoose was sucessful");
        }
    }
    catch (error) {
        if (error) {
            console.log(error);
        }
    }
});
connection();
// app.use((req,res,next)=>{
//     // console.log(req.session);
//     // console.log(req.user);
//     next();
// })
app.use("/auth", auth_route_1.authRouter);
app.use("/addproduct", addproducts_route_1.addProductRouter);
app.use("/getproduct", getProducts_route_1.getProductRouter);
app.get("/", (req, res) => {
    if (!req.session.views) {
        req.session.views = req.session.views + 1;
    }
    else {
        req.session.views += 1;
    }
    ;
    res.send(`You visited ${req.session.views} times`);
});
app.listen(PORT, () => {
    console.log(`port listening at port ${PORT}`);
});
