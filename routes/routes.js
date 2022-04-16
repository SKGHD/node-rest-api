import express from "express";

import {
    getPayload
} from "../controllers/task.js";


const router = express.Router();

// all routes in here are starting with /getPayload

router.get("/", getPayload);

export default router;