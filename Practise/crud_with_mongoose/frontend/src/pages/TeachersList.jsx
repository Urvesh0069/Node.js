import { Link } from "react-router-dom";

// Mock data for teachers
const mockTeachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1-555-0101",
    department: "Mathematics",
    subjects: ["Calculus", "Algebra", "Statistics"],
    experience: "15 years",
    qualification: "Ph.D. in Mathematics",
  },
  {
    id: 2,
    name: "Prof. Michael Brown",
    email: "michael.brown@university.edu",
    phone: "+1-555-0102",
    department: "Physics",
    subjects: ["Mechanics", "Thermodynamics", "Quantum Physics"],
    experience: "12 years",
    qualification: "Ph.D. in Physics",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    email: "emily.davis@university.edu",
    phone: "+1-555-0103",
    department: "Chemistry",
    subjects: ["Organic Chemistry", "Inorganic Chemistry", "Biochemistry"],
    experience: "10 years",
    qualification: "Ph.D. in Chemistry",
  },
  {
    id: 4,
    name: "Prof. Robert Wilson",
    email: "robert.wilson@university.edu",
    phone: "+1-555-0104",
    department: "English",
    subjects: ["Literature", "Creative Writing", "Grammar"],
    experience: "18 years",
    qualification: "M.A. in English Literature",
  },
];

export default function TeachersList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
        <Link
          to="/teachers/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New Teacher
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subjects
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockTeachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {teacher.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {teacher.qualification}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    {teacher.department}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {teacher.experience}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.email}</div>
                  <div className="text-sm text-gray-500">{teacher.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Link
                      to={`/teachers/${teacher.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </Link>
                    <Link
                      to={`/teachers/${teacher.id}/edit`}
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

      {mockTeachers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No teachers found.</p>
          <Link
            to="/teachers/new"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add your first teacher
          </Link>
        </div>
      )}
    </div>
  );
}
