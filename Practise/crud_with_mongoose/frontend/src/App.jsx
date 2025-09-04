import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import StudentsList from "./pages/StudentsList.jsx";
import StudentCreate from "./pages/StudentCreate.jsx";
import StudentEdit from "./pages/StudentEdit.jsx";
import StudentView from "./pages/StudentView.jsx";
import CoursesList from "./pages/CoursesList.jsx";
import CourseCreate from "./pages/CourseCreate.jsx";
import CourseEdit from "./pages/CourseEdit.jsx";
import CourseView from "./pages/CourseView.jsx";
import TeachersList from "./pages/TeachersList.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students">
          <Route index element={<StudentsList />} />
          <Route path="new" element={<StudentCreate />} />
          <Route path=":id" element={<StudentView />} />
          <Route path=":id/edit" element={<StudentEdit />} />
        </Route>
        <Route path="courses">
          <Route index element={<CoursesList />} />
          <Route path="new" element={<CourseCreate />} />
          <Route path=":id" element={<CourseView />} />
          <Route path=":id/edit" element={<CourseEdit />} />
        </Route>
        <Route path="teachers">
          <Route index element={<TeachersList />} />
        </Route>
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
