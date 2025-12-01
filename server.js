import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import sensorRoutes from "./routes/sensorRoutes.js";

dotenv.config();

const app = express();

// Allow CORS for ALL domains
app.use(cors({ origin: "*" }));

app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api", sensorRoutes);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
