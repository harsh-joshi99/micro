import express from "express";
const router = express.Router();
import AuthenticationController from "../controller/AuthenticationController.js";

router.post("/register", AuthenticationController.register);
router.get("/login", AuthenticationController.login);

export default router;