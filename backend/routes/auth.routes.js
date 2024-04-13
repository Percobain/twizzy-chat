import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = express.Router();

router.get('/', (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello World!");
});

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
