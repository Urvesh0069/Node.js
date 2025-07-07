import { connect } from "mongoose";

const dbConnect = async () => {
  try {
    await connect(
        "mongodb+srv://8286urvesh:8286urvesh@cluster0.lewjal9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to the Mongodb.....");
  } catch (error) {
    console.log("error",error);
    
  }
};

export default dbConnect;