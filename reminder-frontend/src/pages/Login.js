import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.post("/login/", { username, password });
      const token = res.data.token;
      localStorage.setItem("token", token); // save token
      alert("Login successful!");
      navigate("/reminders"); // redirect to reminders page
    } catch (err) {
      console.error(err.response);
      setError("Login failed. Check username/password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Login</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: "10px" }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", margin: "10px 0", padding: "10px" }} />
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <button onClick={submit} disabled={loading} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
