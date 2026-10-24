
import { useRef, useState } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Username"
            ref={usernameRef}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg break-words">
            <h3 className="font-bold text-green-700">
              Submitted Information
            </h3>
            <p>Username: {submitted.username}</p>
            <p>Password: {submitted.password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
