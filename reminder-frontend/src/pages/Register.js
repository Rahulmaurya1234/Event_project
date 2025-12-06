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
      navigate("/login"); // redirect to login
    } catch (err) {
      console.error(err.response);
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
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Register</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: "10px" }} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: "10px" }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: "10px" }} />
      {error && <div style={{ color: "red", whiteSpace: "pre-wrap", marginBottom: "10px" }}>{error}</div>}
      <button onClick={submit} disabled={loading} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
        {loading ? "Registering..." : "Register"}
      </button>
    </div>
  );
}
