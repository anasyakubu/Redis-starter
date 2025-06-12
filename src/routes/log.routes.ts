import express from "express";
const router = express.Router();
// import { requireAuth } from "../middleware/authMiddleware";
import { listLogs } from "../controllers/logs.controller";


//*********** Login, register & verification ***********//
router.get("/logs", listLogs);


export default router;