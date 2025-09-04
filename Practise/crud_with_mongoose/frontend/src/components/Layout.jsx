import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link
                to="/students"
                className="text-xl font-bold text-gray-800 hover:text-blue-600"
              >
                Student Management
              </Link>
              <div className="flex space-x-6">
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/students"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  Students
                </Link>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  Courses
                </Link>
                <Link
                  to="/teachers"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  Teachers
                </Link>
                <Link
                  to="/reports"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2024 Student Management System
          </p>
        </div>
      </footer>
    </div>
  );
}
