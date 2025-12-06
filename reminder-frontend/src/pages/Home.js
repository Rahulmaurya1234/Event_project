import { useState, useEffect } from "react";
import API from "../api";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch reminders on component mount
  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/reminder/reminders/");
      setReminders(res.data);
    } catch (err) {
      console.error(err.response);
      setError("Failed to fetch reminders. Login again if required.");
    } finally {
      setLoading(false);
    }
  };

  const addReminder = async () => {
    if (!title || !description) return alert("Fill all fields");
    try {
      const res = await API.post("/reminder/reminders/", { title, description });
      setReminders([...reminders, res.data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err.response);
      setError("Failed to add reminder.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1>My Reminders</h1>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

      <div style={{ marginBottom: "20px" }}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "48%", marginRight: "4%", padding: "10px" }} />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "48%", padding: "10px" }} />
        <button onClick={addReminder} style={{ display: "block", width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
          Add Reminder
        </button>
      </div>

      {loading ? <p>Loading...</p> : (
        <ul>
          {reminders.map(r => (
            <li key={r.id} style={{ marginBottom: "10px", border: "1px solid #ddd", padding: "10px" }}>
              <strong>{r.title}</strong> <br /> {r.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
