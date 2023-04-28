import mongoose from "mongoose";
import { MONGO_URI } from "../utilities/config";

export const connectDB = async () => {
  if (!MONGO_URI) {
    console.log("MONGO URI is not defined or incorrect.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected.");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
