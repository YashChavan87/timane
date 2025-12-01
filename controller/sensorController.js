import Sensor from "../models/Sensor.js";

export const saveSensorData = async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ error: "No data received" });
    }

    const saved = await Sensor.create(data);

    return res.status(201).json({
      message: "Sensor data saved successfully",
      saved
    });

  } catch (err) {
    console.error("Save Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
};

export const getLatestSensorData = async (req, res) => {
  try {
    const latest = await Sensor.findOne().sort({ timestamp: -1 });

    return res.status(200).json(latest);

  } catch (err) {
    console.error("Fetch Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
};
