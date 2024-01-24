import express from "express";
import { loginController, signupController, usersController } from "../controller/authControllers.js";

const authRoues = express.Router();


authRoues.post("/signup", signupController)
authRoues.post("/login", loginController)
authRoues.get("/users", usersController)

export default authRoues  