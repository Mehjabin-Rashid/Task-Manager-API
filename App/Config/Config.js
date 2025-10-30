import dotenv from 'dotenv';
dotenv.config();

// WARNING: The default values below are for backward compatibility only.
// For production use, ALWAYS set environment variables in your .env file.
// Never use these default values in production as they may contain exposed credentials.

export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION || "mongodb+srv://Mehjabin:241103@cluster0.mwz5d.mongodb.net/test";

export const JWT_SECRET = process.env.JWT_SECRET || "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRATION_TIME = parseInt(process.env.JWT_EXPIRATION_TIME) || 60*60*24*30;

export const EMAIL_HOST = process.env.EMAIL_HOST || "mail.teamrabbil.com";
export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT) || 587;
export const EMAIL_SECURITY = process.env.EMAIL_SECURITY === 'true' || false;
export const EMAIL_USER = process.env.EMAIL_USER || "info@teamrabbil.com";
export const EMAIL_PASS = process.env.EMAIL_PASS || "~sR4[bhaC[Qs";
export const MAIL_ENCRYPTION = process.env.MAIL_ENCRYPTION || "";


export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || "50mb";
export const URL_ENCODED = process.env.URL_ENCODED === 'true' || true;


export const REQUEST_LIMIT_TIME = parseInt(process.env.REQUEST_LIMIT_TIME) || 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = parseInt(process.env.REQUEST_LIMIT_NUMBER) || 3000; // Per 15 Min 3000 Request Allowed


export const WEB_CACHE = process.env.WEB_CACHE === 'true' || false;
export const PORT = parseInt(process.env.PORT) || 5600
