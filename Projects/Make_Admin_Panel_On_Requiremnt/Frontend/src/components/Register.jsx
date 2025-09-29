import React, { useState } from "react";
import axios from "axios";

const Register = ({ onClose, onSwitch }) => {
  // ✅ Correct endpoint
  const API_URL = "http://localhost:6969/auth/register";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, formData);
      console.log("✅ Registered:", res.data);
      alert("Registration successful!");
      setFormData({ name: "", email: "", password: "" });

      onSwitch(); // Switch to login after successful registration

    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
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
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-gray-900 font-semibold hover:underline"
          >
            Login
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

export default Register;
