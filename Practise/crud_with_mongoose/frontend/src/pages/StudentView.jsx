import { useParams, useNavigate, Link } from "react-router-dom";

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

export default function StudentView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      // Here you would typically call your API to delete the student
      console.log("Deleting student:", id);
      alert("Student deleted successfully!");
      navigate("/students");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Student Details
            </h1>
            <div className="flex space-x-2">
              <Link
                to={`/students/${id}/edit`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <p className="text-lg text-gray-900">{mockStudent.name}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <p className="text-lg text-gray-900">{mockStudent.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <p className="text-lg text-gray-900">{mockStudent.age}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade
                </label>
                <span
                  className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    mockStudent.grade === "A+"
                      ? "bg-green-100 text-green-800"
                      : mockStudent.grade === "A"
                      ? "bg-green-100 text-green-800"
                      : mockStudent.grade === "B+"
                      ? "bg-blue-100 text-blue-800"
                      : mockStudent.grade === "B"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {mockStudent.grade}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <p className="text-lg text-gray-900">{mockStudent.phone}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <p className="text-lg text-gray-900">{mockStudent.address}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/students"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Students List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
