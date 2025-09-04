import { Link } from "react-router-dom";

export default function Reports() {
  const gradeDistribution = [
    { grade: "A+", count: 25, percentage: 16 },
    { grade: "A", count: 45, percentage: 29 },
    { grade: "B+", count: 35, percentage: 22 },
    { grade: "B", count: 30, percentage: 19 },
    { grade: "C+", count: 15, percentage: 10 },
    { grade: "C", count: 5, percentage: 3 },
    { grade: "D", count: 2, percentage: 1 },
    { grade: "F", count: 1, percentage: 1 },
  ];

  const departmentStats = [
    { department: "Mathematics", students: 45, averageGrade: "B+", courses: 3 },
    { department: "Physics", students: 38, averageGrade: "B", courses: 2 },
    { department: "Chemistry", students: 42, averageGrade: "A-", courses: 2 },
    { department: "English", students: 35, averageGrade: "A", courses: 2 },
  ];

  const attendanceData = [
    { month: "January", attendance: 95 },
    { month: "February", attendance: 92 },
    { month: "March", attendance: 88 },
    { month: "April", attendance: 94 },
    { month: "May", attendance: 96 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Reports & Analytics
        </h1>
        <p className="text-gray-600">
          Comprehensive insights into student performance and system statistics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full p-3 mr-4">
              <span className="text-2xl text-white">📊</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Students
              </p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-3 mr-4">
              <span className="text-2xl text-white">📚</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Courses
              </p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-full p-3 mr-4">
              <span className="text-2xl text-white">👨‍🏫</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Teachers</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-500 rounded-full p-3 mr-4">
              <span className="text-2xl text-white">📈</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Grade</p>
              <p className="text-2xl font-bold text-gray-900">B+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Grade Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Grade Distribution
          </h2>
          <div className="space-y-3">
            {gradeDistribution.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 text-sm font-medium text-gray-700">
                  {item.grade}
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.grade === "A+" || item.grade === "A"
                          ? "bg-green-500"
                          : item.grade === "B+" || item.grade === "B"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-sm text-gray-600 text-right">
                  {item.count} ({item.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Department Statistics
          </h2>
          <div className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-3 last:border-b-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {dept.department}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {dept.students} students • {dept.courses} courses
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      dept.averageGrade === "A"
                        ? "bg-green-100 text-green-800"
                        : dept.averageGrade === "A-"
                        ? "bg-green-100 text-green-800"
                        : dept.averageGrade === "B+"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {dept.averageGrade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Trend */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Monthly Attendance Trend
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {attendanceData.map((data, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold text-blue-600">
                  {data.attendance}%
                </div>
              </div>
              <p className="text-sm text-gray-600">{data.month}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Export Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">📄</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">Student Report</p>
              <p className="text-sm text-gray-600">Export student data</p>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">📊</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">Grade Report</p>
              <p className="text-sm text-gray-600">Export grade analytics</p>
            </div>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-2xl mr-3">📈</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">Attendance Report</p>
              <p className="text-sm text-gray-600">Export attendance data</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
