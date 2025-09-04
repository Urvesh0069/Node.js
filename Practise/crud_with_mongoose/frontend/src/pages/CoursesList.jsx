import { Link } from "react-router-dom";

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    name: "Mathematics 101",
    code: "MATH101",
    credits: 3,
    instructor: "Dr. Sarah Johnson",
    students: 45,
    schedule: "Mon, Wed, Fri 9:00 AM",
    room: "Room 201",
  },
  {
    id: 2,
    name: "Physics Fundamentals",
    code: "PHYS101",
    credits: 4,
    instructor: "Prof. Michael Brown",
    students: 38,
    schedule: "Tue, Thu 10:30 AM",
    room: "Lab 105",
  },
  {
    id: 3,
    name: "Chemistry Basics",
    code: "CHEM101",
    credits: 3,
    instructor: "Dr. Emily Davis",
    students: 42,
    schedule: "Mon, Wed 2:00 PM",
    room: "Lab 203",
  },
  {
    id: 4,
    name: "English Literature",
    code: "ENG201",
    credits: 3,
    instructor: "Prof. Robert Wilson",
    students: 35,
    schedule: "Tue, Thu 1:00 PM",
    room: "Room 301",
  },
];

export default function CoursesList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
        <Link
          to="/courses/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New Course
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credits
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {course.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {course.code}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{course.credits}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {course.instructor}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{course.students}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{course.schedule}</div>
                  <div className="text-xs text-gray-500">{course.room}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Link
                      to={`/courses/${course.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </Link>
                    <Link
                      to={`/courses/${course.id}/edit`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mockCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found.</p>
          <Link
            to="/courses/new"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add your first course
          </Link>
        </div>
      )}
    </div>
  );
}
