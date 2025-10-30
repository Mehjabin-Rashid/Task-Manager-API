import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../Config/Config.js";
import jwt from "jsonwebtoken";

export const TokenEncode = (email, User_id) => {
    const KEY = JWT_SECRET;
    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME}
    const PAYLOAD = {email: email, User_id: User_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const TokenDecode = (token) =>{
    try {
        return jwt.verify(token, JWT_SECRET)
    }catch(err){
        return null 
    }
};
