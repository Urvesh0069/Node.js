import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="bg-gray-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎓 Student Management</h1>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/students" className="hover:text-gray-200">Students</Link></li>
            <li><Link to="/student-form" className="hover:text-gray-200">Student Form</Link></li>
            <li>
              <button
                type="button"
                onClick={() => setShowLogin(true)}
                className=" bg-gray-800 shadow-lg text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                Login
              </button>
            </li>
            {/* <li>
              <button
                type="button"
                onClick={() => setShowRegister(true)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
              >
                Register
              </button>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Popups */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitch={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
