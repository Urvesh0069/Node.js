import { student } from "../models/student.models.js";

export const createStudent = async (req, res) => {
    try {
        const student = await new student(req.body);
        await student.save();
        res.status(201).json({ student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await student.findById(req.params.id);
        res.json({ student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    try {
        await student.findByIdAndUpdate(req.params.id);
        res.json({ message: "Student update successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

