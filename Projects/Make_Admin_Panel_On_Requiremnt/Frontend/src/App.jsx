import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Studentform from "./components/Studentform";

function App() {
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      email: "dfghjk@gmail.com",
      course: "Mathematics",
      age: 20,
    }
  ]);  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={<Students students={students} />}
        />
        <Route
          path="/student-form"
          element={<Studentform setStudents={setStudents} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
