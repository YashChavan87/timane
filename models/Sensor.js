import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  direct_co2: Number,
  current: Number,
  power: Number,
  indirect_co2: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Sensor", sensorSchema);
