import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      await API.post("/register/", { username, email, password });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data) {
        const messages = [];
        for (let key in err.response.data) {
          const fieldErrors = err.response.data[key];
          if (Array.isArray(fieldErrors)) {
            fieldErrors.forEach(msg => messages.push(`${key}: ${msg}`));
          } else {
            messages.push(`${key}: ${fieldErrors}`);
          }
        }
        setError(messages.join("\n"));
      } else {
        setError("Registration failed. Try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4 text-sm whitespace-pre-wrap">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            placeholder="Enter password"
          />
        </div>

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}
