import crypto from "crypto";

export async function genPassword(password:string): Promise<{salt:string; hash:string}>{
    try {
        console.log(password);
        let salt = crypto.randomBytes(32).toString("hex");
        let genHash = crypto.pbkdf2Sync(password,salt, 10000, 64, "sha512").toString("hex");
    
        return{
            salt:salt,
            hash:genHash
        }
    } catch (error) {
        throw new Error("Error generating password hash error");
        console.log(error);
    }
};

export function validPassword (password:any, hash:string, salt:string){
    let hashVerify = crypto.pbkdf2Sync(password,salt,10000,64, "sha512").toString("hex");
    return hash = hashVerify;
 }