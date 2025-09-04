import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

export default function StudentCreate() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Here you would typically send the data to your API
    console.log("Creating student:", formData);
    alert("Student created successfully!");
    navigate("/students");
  };

  const handleCancel = () => {
    navigate("/students");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <StudentForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
}
