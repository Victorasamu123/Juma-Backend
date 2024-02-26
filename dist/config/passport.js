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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const auth_modal_1 = require("../models/auth.modal");
const passwordUtills_1 = require("../lib/passwordUtills");
const LocalStrategy = passport_local_1.default.Strategy;
const customFields = {
    emailField: "email",
    passwordField: "password",
};
const verifyCallBack = (email, password, done) => {
    auth_modal_1.User.findOne({ email: email }).then((user) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user) {
            return done(null, false);
        }
        const isValid = yield (0, passwordUtills_1.validPassword)(password, user.hash, user.salt);
        if (isValid) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    })).catch((err) => {
        done(err);
    });
};
const Strategy = new LocalStrategy(customFields, verifyCallBack);
passport_1.default.use(Strategy);
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((userId, done) => {
    auth_modal_1.User.findById(userId).then((user) => {
        done(null, user);
    }).catch(err => done(err));
});
