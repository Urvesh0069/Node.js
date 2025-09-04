import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm";

export default function CourseCreate() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Here you would typically send the data to your API
    console.log("Creating course:", formData);
    alert("Course created successfully!");
    navigate("/courses");
  };

  const handleCancel = () => {
    navigate("/courses");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <CourseForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
}
