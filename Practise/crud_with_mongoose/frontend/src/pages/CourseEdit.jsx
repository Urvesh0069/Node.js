import { useParams, useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm";

// Mock data - in real app, you'd fetch this from API
const mockCourse = {
  id: 1,
  name: "Mathematics 101",
  code: "MATH101",
  credits: 3,
  instructor: "Dr. Sarah Johnson",
  description:
    "Introduction to basic mathematical concepts including algebra, geometry, and calculus fundamentals.",
  schedule: "Mon, Wed, Fri 9:00 AM",
  room: "Room 201",
  maxStudents: 50,
};

export default function CourseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Here you would typically send the updated data to your API
    console.log("Updating course:", id, formData);
    alert("Course updated successfully!");
    navigate("/courses");
  };

  const handleCancel = () => {
    navigate("/courses");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <CourseForm
          course={mockCourse}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
