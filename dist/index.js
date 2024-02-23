"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
;
;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
require("dotenv").config();
const PORT = process.env.PORT || 3500;
const MONGODB = process.env.MONGODB;
const SESSIONSECRET = process.env.SESSIONSECRET;
require("./config/passport");
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
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
app.listen(PORT, () => {
    console.log(`port listening at port ${PORT}`);
});
