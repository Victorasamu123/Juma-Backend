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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.SignUp = void 0;
const passwordUtills_1 = require("../lib/passwordUtills");
const auth_modal_1 = require("../models/auth.modal");
const SignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const saltHash = yield (0, passwordUtills_1.genPassword)(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    console.log(salt);
    const newUser = new auth_modal_1.User({
        username: req.body.username,
        email: req.body.email,
        hash: hash,
        salt: salt,
        adminStatus: req.body.adminStatus
    });
    console.log(newUser);
    try {
        let newUserCreated = yield auth_modal_1.User.create(newUser);
        if (newUserCreated) {
            res.send({ message: "Hurray signup was successful", status: true });
        }
    }
    catch (error) {
        console.log(error);
        if (error) {
            res.send({ message: "Oops signup was not successful", status: false });
        }
    }
});
exports.SignUp = SignUp;
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.signin = signin;
