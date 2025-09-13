import express from "express";
const router = express.Router();
import * as TaskController from "../App/Controllers/TaskControllers.js";
import * as UserController from "../App/Controllers/UsersControllers.js";
import AuthMiddlewares from "../App/Middlewares/AuthMiddlewares.js";


// Users
router.post("/Registration",UserController.Registration);
router.post("/Login",UserController.Login);
router.get("/ProfileDetails",AuthMiddlewares, UserController.ProfileDetails);
router.post("/ProfileUpdate",AuthMiddlewares,UserController.profileUpdate);
router.get("/EmailVerify/:email",UserController.EmailVerify);
router.post("/CodeVerify/:email/:code",UserController.CodeVerify);
router.post("/ResetPassword",UserController.ResetPassword);


// Task 
router.post("/CreateTask",AuthMiddlewares,TaskController.CreateTask);
router.get("/UpdateTaskStatus/:id/:Status",AuthMiddlewares,TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus/:Status",AuthMiddlewares,TaskController.TaskListByStatus);
router.get("/DeleteTask/:id",AuthMiddlewares,TaskController.DeleteTask);
router.get("/CountTask",AuthMiddlewares,TaskController.CountTask);

export default router;