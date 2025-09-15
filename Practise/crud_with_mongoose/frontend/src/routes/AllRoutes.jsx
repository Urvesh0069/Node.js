import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout"; // 👈 Layout import karo
import Dashboard from "../pages/Dashboard";
import StudentsList from "../pages/StudentsList";
import StudentCreate from "../pages/StudentCreate";
import StudentEdit from "../pages/StudentEdit";
import StudentView from "../pages/StudentView";
import CoursesList from "../pages/CoursesList";
import CourseCreate from "../pages/CourseCreate";
import CourseEdit from "../pages/CourseEdit";
import CourseView from "../pages/CourseView";
import TeacherCreate from "../pages/TeacherCreate";
import TeachersList from "../pages/TeachersList";
import Reports from "../pages/Reports";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/create" element={<StudentCreate />} />
        <Route path="/students/:id" element={<StudentView />} />
        <Route path="/students/:id/edit" element={<StudentEdit />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/create" element={<CourseCreate />} />
        <Route path="/courses/:id" element={<CourseView />} />
        <Route path="/courses/:id/edit" element={<CourseEdit />} />
        <Route path="/teachers" element={<TeachersList />} />
        <Route path="/teachers/create" element={<TeacherCreate />} />
        <Route path="/reports" element={<Reports />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AllRoutes;
