import { connect } from "mongoose";

const dbConnect = async () => {
  try {
    await connect(
      "mongodb+srv://8286urvesh:8286urvesh@cluster0.lewjal9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
