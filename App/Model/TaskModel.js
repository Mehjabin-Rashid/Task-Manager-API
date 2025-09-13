import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        Status: {type: String, required: true},
        User_id: {type: mongoose.Schema.Types.ObjectId, required: true}
    },
    { timestamps: true, versionKey: false}
);

const TaskModel = mongoose.model("task",TaskSchema);
export default TaskModel