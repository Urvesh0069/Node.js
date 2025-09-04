import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

// Mock data - in real app, you'd fetch this from API
const mockStudent = {
  id: 1,
  name: "John Doe",
  email: "john.doe@email.com",
  age: 20,
  grade: "A",
  phone: "+1-555-0123",
  address: "123 Main St, City, State",
};

export default function StudentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Here you would typically send the updated data to your API
    console.log("Updating student:", id, formData);
    alert("Student updated successfully!");
    navigate("/students");
  };

  const handleCancel = () => {
    navigate("/students");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <StudentForm
          student={mockStudent}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
