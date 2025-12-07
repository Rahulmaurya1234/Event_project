import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Reminders() {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [remindAt, setRemindAt] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username") || "User";

  useEffect(() => {
    if (!token) return;
    fetchReminders();
  }, [token]);

  const fetchReminders = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await API.get("/reminder/reminders/", {
        headers: { Authorization: `Token ${token}` },
      });
      setReminders(res.data);
    } catch (err) {
      setError("Failed to fetch reminders.");
    } finally {
      setLoading(false);
    }
  };

  const addReminder = async () => {
    if (!token) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    if (!title || !description || !remindAt) {
      return alert("Please fill all fields!");
    }

    const sendData = {
      title,
      description,
      remind_at: new Date(remindAt).toISOString(),
    };

    try {
      const res = await API.post("/reminder/reminders/", sendData, {
        headers: { Authorization: `Token ${token}` },
      });
      setReminders([res.data, ...reminders]);
      setTitle("");
      setDescription("");
      setRemindAt("");
    } catch (err) {
      setError("Failed to add reminder.");
      console.error(err.response || err);
    }
  };

  const deleteReminder = async (id) => {
    if (!token) return;
    try {
      await API.delete(`/reminder/reminders/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      setReminders(reminders.filter((r) => r.id !== id));
    } catch (err) {
      alert("Failed to delete reminder.");
      console.error(err.response || err);
    }
  };

  const editReminder = async (id) => {
    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");
    if (!newTitle || !newDescription) return;

    try {
      const res = await API.put(
        `/reminder/reminders/${id}/`,
        {
          title: newTitle,
          description: newDescription,
          remind_at: new Date(remindAt).toISOString(),
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      setReminders(reminders.map((r) => (r.id === id ? res.data : r)));
    } catch (err) {
      alert("Failed to edit reminder.");
      console.error(err.response || err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 md:px-20 flex flex-col items-center">

      {/* Hello User */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        Hello, {username}!
      </h1>

      {/* Reminder Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Reminder</h2>

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="datetime-local"
          value={remindAt}
          onChange={(e) => setRemindAt(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={addReminder}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Reminder
        </button>

        {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
      </div>

      {/* Reminders List */}
      <h2 className="text-2xl font-semibold mb-6 text-center w-full max-w-2xl">Your Reminders</h2>

      {loading ? (
        <p className="text-center text-gray-700">Loading...</p>
      ) : reminders.length === 0 ? (
        <p className="text-center text-gray-500">No reminders yet!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {reminders.map((r) => (
            <div key={r.id} className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 bg-blue-100 text-blue-800 p-2 rounded-lg">
                {r.title}
              </h3>
              <p className="text-gray-600 mb-2">{r.description}</p>
              <p className="text-gray-400 text-sm mb-4">{new Date(r.remind_at).toLocaleString()}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => editReminder(r.id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteReminder(r.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
