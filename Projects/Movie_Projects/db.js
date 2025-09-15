import mongoose from "mongoose";
const dbconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://crud-with-mongoose:123456789@cluster0.b2xqcvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to the Mongodb.....");
  } catch (error) {
    console.log("error", error);
  }
};
export default dbconnect;
