import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String], // array of subjects
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // avoid duplicate teacher emails
  },
  phone: {
    type: String,
    required: true,
  },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
