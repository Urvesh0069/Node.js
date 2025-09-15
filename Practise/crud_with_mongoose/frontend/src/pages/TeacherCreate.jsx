import { useNavigate } from "react-router-dom";
import TeacherForm from "../components/TeacherForm";

const TeacherCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Dummy submit (API call no need for now)
    console.log("Creating teacher:", formData);
    alert("Teacher created successfully!");
    navigate("/teachers");
  };

  const handleCancel = () => {
    navigate("/teachers");
  };

  return (
    <div className="p-6">
      <TeacherForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default TeacherCreate;
