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
exports.genPassword = genPassword;
exports.validPassword = validPassword;
const crypto_1 = __importDefault(require("crypto"));
function genPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(password);
            let salt = crypto_1.default.randomBytes(32).toString("hex");
            let genHash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
            return {
                salt: salt,
                hash: genHash
            };
        }
        catch (error) {
            throw new Error("Error generating password hash error");
            console.log(error);
        }
    });
}
;
function validPassword(password, hash, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newHash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
            return newHash === hash;
        }
        catch (err) {
            console.log('Error verifying password:', err);
            return false;
        }
    });
}
