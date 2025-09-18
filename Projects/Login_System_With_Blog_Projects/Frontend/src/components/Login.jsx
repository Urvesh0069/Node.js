const Login = ({ onClose, onSwitch }) => {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Login clicked");
          }}
          className="flex flex-col space-y-4"
        >
          <input type="email" placeholder="Email" className="border p-2 rounded-md" />
          <input type="password" placeholder="Password" className="border p-2 rounded-md" />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-sm">
          Don’t have an account?{" "}
          <button onClick={onSwitch} className="text-gray-900 font-semibold hover:underline">
            Register
          </button>
        </p>

        <button onClick={onClose} className="mt-3 text-red-500 hover:underline text-sm">
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
