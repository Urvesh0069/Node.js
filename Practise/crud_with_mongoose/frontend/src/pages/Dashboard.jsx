import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock statistics data
  const stats = [
    { title: "Total Students", value: "156", color: "bg-blue-500", icon: "👥" },
    { title: "Active Courses", value: "12", color: "bg-green-500", icon: "📚" },
    { title: "Teachers", value: "8", color: "bg-purple-500", icon: "👨‍🏫" },
    { title: "Average Grade", value: "B+", color: "bg-yellow-500", icon: "📊" },
  ];

  const recentStudents = [
    { name: "Alice Johnson", grade: "A+", course: "Mathematics" },
    { name: "Bob Smith", grade: "B", course: "Physics" },
    { name: "Carol Davis", grade: "A", course: "Chemistry" },
    { name: "David Wilson", grade: "B+", course: "Biology" },
  ];

  const upcomingEvents = [
    { title: "Final Exams", date: "Dec 15, 2024", type: "exam" },
    { title: "Parent-Teacher Meeting", date: "Dec 20, 2024", type: "meeting" },
    { title: "Holiday Break", date: "Dec 25, 2024", type: "holiday" },
    { title: "New Semester Starts", date: "Jan 8, 2025", type: "semester" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the Student Management System
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-full p-3 mr-4`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Students */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Students
            </h2>
            <Link
              to="/students"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {recentStudents.map((student, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.course}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    student.grade === "A+"
                      ? "bg-green-100 text-green-800"
                      : student.grade === "A"
                      ? "bg-green-100 text-green-800"
                      : student.grade === "B+"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {student.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <div
                  className={`w-3 h-3 rounded-full mr-3 ${
                    event.type === "exam"
                      ? "bg-red-500"
                      : event.type === "meeting"
                      ? "bg-blue-500"
                      : event.type === "holiday"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/students/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mr-3">➕</span>
            <div>
              <p className="font-medium text-gray-900">Add Student</p>
              <p className="text-sm text-gray-600">Register new student</p>
            </div>
          </Link>
          <Link
            to="/courses/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mr-3">📚</span>
            <div>
              <p className="font-medium text-gray-900">Add Course</p>
              <p className="text-sm text-gray-600">Create new course</p>
            </div>
          </Link>
          <Link
            to="/reports"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mr-3">📊</span>
            <div>
              <p className="font-medium text-gray-900">View Reports</p>
              <p className="text-sm text-gray-600">Analytics & insights</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
