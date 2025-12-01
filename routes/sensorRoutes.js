import { Router } from "express";
import { saveSensorData, getLatestSensorData } from "../controller/sensorController.js";

const router = Router();

router.post("/sensor", saveSensorData);
router.get("/sensor/latest", getLatestSensorData);

export default router;
