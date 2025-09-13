import UsersModel from "../Model/UsersModel.js";
import {TokenEncode} from "../Utility/tokenUtility.js";
import SendEmail from "../Utility/emailUtility.js";


export const Registration = async (req, res) =>{
    try {
        let reqBody = req.body;
        await UsersModel.create(reqBody);
        return res.json({Status: "Success", "Message": "User Registration Successfully"});
    } catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const Login = async (req, res) =>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody);
        if(data === null){
            return res.json({Status: "fail", "Message": "User not found"});
        }else{
            // Login Success token Encode
        let token = TokenEncode(data['email'], data['_id']);
        return res.json({Status: "Success", "Message": "User Login Successfully",token:token});
        }
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const ProfileDetails = async (req, res) =>{
    try {
        let User_id = req.headers['user_id'];
        let data =  await UsersModel.findOne({"_id": User_id});
        return res.json({Status: "Success", "Message": "User ProfileDetails Successfully", data:data});
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const profileUpdate = async (req, res) =>{
    try {
        let reqBody = req.body;
        let user_id = req.headers['user_id'];
        await UsersModel.updateOne({"_id": user_id},reqBody);
        return res.json({Status: "Success", "Message": "User profileUpdate Successfully"});
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const EmailVerify = async (req, res) =>{
    try {
        let email = req.params.email;
        let data = await UsersModel.findOne({email: email});
        if(data == null){
            return res.json({Status: "fail", "Message": "User email done not exist"});
         }else {
            let code = Math.floor(100000+Math.random()*900000);
            let EmailTo = data['email'];
            let EmailText = "Your Code is "+ code;
            let EmailSubject = "Task Manager Verification Code";
            await SendEmail(EmailTo, EmailText, EmailSubject);

            await UsersModel.updateOne({email: email}, {otp:code});
            return res.json({Status: "Success", "Message": "Verification Successfully, Check email"});
         }
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const CodeVerify = async (req, res) =>{
    try {
        let email = req.params.email;
        let code = req.params.code;
        let data = await UsersModel.findOne({email: email, otp: code});
        if(data == null){
            return res.json({"Status": "fail", "Message": "Wrong Verification Code"});
        }else{
            return res.json({Status: "Success", "Message": "Verification Successfully"});
        }
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}

export const ResetPassword = async (req, res) =>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.findOne({email: reqBody['email'], otp: reqBody['code']});
        if (data == null){
            return res.json({Status: "fail", "Message": "Wrong Verification Code"});
        }else{
            await UsersModel.updateOne({email: reqBody['email']}, {
                otp: "0", password: reqBody['Password'],
            });
            return res.json({Status: "Success", "Message": "User ResetPassword Successfully"});
        }
    }catch(err){
        return res.json({Status: "fail", "Message": err.toString()});
    }
}