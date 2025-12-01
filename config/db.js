import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("📡 Attempting MongoDB connection...");

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });

    console.log("🟢 MongoDB Connected Successfully");
  } catch (err) {
    console.error("🔴 Initial MongoDB Connection Error:", err.message);
  }

  mongoose.connection.on("error", (err) => {
    console.error("❌ Ongoing MongoDB Error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Mongoose disconnected");
  });

  mongoose.connection.on("connected", () => {
    console.log("🟢 Mongoose connected");
  });
};
