import TaskModel from "../Model/TaskModel.js";
import mongoose from "mongoose";

export const CreateTask = async(req, res) =>{

    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.User_id = user_id;
        await TaskModel.create(reqBody);
        return res.json({Status: "Success", "Message": "User CreateTask Successfully"});
    }catch(e){
        return res.json({Status: "fail", "Message": e.toString()});
    }
}

export const UpdateTaskStatus = async(req, res) =>{
    try{
        let id = req.params.id;
        let Status = req.params.Status;
        let User_id = req.headers['user_id'];
        await TaskModel.updateOne({"_id": id, "User_id": User_id},{
            Status: Status
        })
        return res.json({Status: "Success", "Message": "User UpdateTaskStatus Successfully"});
    }catch(e){
        return res.json({Status: "fail", "Message": e.toString()});
    }
}

export const TaskListByStatus = async(req, res) =>{
    try {
        let Status = req.params.Status;
        let user_id = req.headers['user_id'];
        let data = await TaskModel.find({User_id: user_id, Status: Status});
        return res.json({Status: "Success", "Message": "User TaskListByStatus Successfully", data:data});
    }catch(e){
        return res.json({Status: "fail", "Message": e.toString()});
    }
    
}

export const DeleteTask = async(req, res) =>{
    try {
        let id = req.params.id;
        let user_id = req.headers['user_id'];
        await TaskModel.deleteOne({"_id": id, "User_id": user_id});
        return res.json({Status: "Success", "Message": "User DeleteTask Successfully"});
    }catch(e){
        return res.json({Status: "fail", "Message": e.toString()});
    }
}

export const CountTask = async(req, res) =>{
    try{
        let ObjectID = mongoose.Types.ObjectId;
        let User_id = req.headers['user_id'];
        let User_id_object = new ObjectID(User_id);

        let data = await TaskModel.aggregate([
            {$match:{User_id: User_id_object}},
            {$group:{_id:"$Status", sum:{$count:{}}}},
        ]);
        return res.json({Status: "Success", "Message": "User CountTask Successfully"});
    }catch(e){
        return res.json({Status: "fail", "Message": e.toString()});
    }
}