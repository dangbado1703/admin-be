import express from "express";
import { loginController } from "../controller/loginController";
import { registerController } from "../controller/register.controller";
import { loginValidate } from "../validate/login.validate";
const Router = express.Router();

Router.post("/login", loginValidate, loginController);
Router.post('register', registerController)

export default Router;
