import { Link } from "react-router-dom";

const Students = ({ students = [] }) => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Students List</h2>

      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Course</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center text-gray-600 py-4"
              >
                No students added yet.
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                <td className="border border-gray-300 px-4 py-2">{student.course}</td>
                <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <Link to="/student-form">
                    <button
                      // onClick={() => onEdit(index)}
                      className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-900"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    // onClick={() => onDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
