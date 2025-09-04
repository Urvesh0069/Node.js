import { useParams, useNavigate, Link } from "react-router-dom";

// Mock data - in real app, you'd fetch this from API
const mockCourse = {
  id: 1,
  name: "Mathematics 101",
  code: "MATH101",
  credits: 3,
  instructor: "Dr. Sarah Johnson",
  description:
    "Introduction to basic mathematical concepts including algebra, geometry, and calculus fundamentals. This course covers essential mathematical skills needed for advanced studies.",
  schedule: "Mon, Wed, Fri 9:00 AM",
  room: "Room 201",
  maxStudents: 50,
  currentStudents: 45,
  startDate: "2024-01-15",
  endDate: "2024-05-15",
};

export default function CourseView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      // Here you would typically call your API to delete the course
      console.log("Deleting course:", id);
      alert("Course deleted successfully!");
      navigate("/courses");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {mockCourse.name}
              </h1>
              <p className="text-lg text-gray-600 mt-1">{mockCourse.code}</p>
            </div>
            <div className="flex space-x-2">
              <Link
                to={`/courses/${id}/edit`}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credits
              </label>
              <p className="text-lg text-gray-900">{mockCourse.credits}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructor
              </label>
              <p className="text-lg text-gray-900">{mockCourse.instructor}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Schedule
              </label>
              <p className="text-lg text-gray-900">{mockCourse.schedule}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room
              </label>
              <p className="text-lg text-gray-900">{mockCourse.room}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enrollment
              </label>
              <p className="text-lg text-gray-900">
                {mockCourse.currentStudents} / {mockCourse.maxStudents} students
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <p className="text-lg text-gray-900">
                {mockCourse.startDate} to {mockCourse.endDate}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <p className="text-gray-900 leading-relaxed">
              {mockCourse.description}
            </p>
          </div>

          {/* Course Statistics */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Course Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {mockCourse.currentStudents}
                </p>
                <p className="text-sm text-gray-600">Enrolled Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">B+</p>
                <p className="text-sm text-gray-600">Average Grade</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">90%</p>
                <p className="text-sm text-gray-600">Attendance Rate</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <Link
              to="/courses"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Courses List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
