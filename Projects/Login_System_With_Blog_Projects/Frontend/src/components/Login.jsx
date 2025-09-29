import React, { useState } from "react";
import axios from "axios";

const Login = ({ onClose, onSwitch }) => {
  const API_URL = "http://localhost:6969/auth/login";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, formData);
      console.log("✅ Logged In:", res.data);

      // ✅ Save token for future API calls
      localStorage.setItem("token", res.data.token);

      alert(`Welcome ${res.data.user.name}`);
      onClose(); // close modal after login
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">
          Don’t have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-gray-900 font-semibold hover:underline"
          >
            Register
          </button>
        </p>

        <button
          onClick={onClose}
          className="mt-3 text-red-500 hover:underline text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
