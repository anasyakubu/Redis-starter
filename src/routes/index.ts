import express from "express";
import logRoutes from "./log.routes";

const router = express.Router();

//********************** Routes Setup **********************//
router.use("/", logRoutes);

export default router;