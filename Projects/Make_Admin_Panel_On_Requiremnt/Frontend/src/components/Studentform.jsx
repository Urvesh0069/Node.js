import { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", formData);
    alert("✅ Student Saved Successfully!");
    setFormData({ name: "", email: "", course: "", age: "" });
  };

  return (
    <div className="flex justify-center items-center pt-20 pb-22 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-[450px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Student Form</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Course */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Age */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
