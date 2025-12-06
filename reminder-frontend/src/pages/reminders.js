import { useState, useEffect } from "react";
import API from "../api";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [remindAt, setRemindAt] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setError("Failed to fetch reminders.");
    } finally {
      setLoading(false);
    }
  };

  const addReminder = async () => {
    if (!title || !description || !remindAt)
      return alert("Please fill all fields!");

    const sendData = {
      title,
      description,
      remind_at: new Date(remindAt).toISOString(),
    };

    try {
      const res = await API.post("/reminder/reminders/", sendData);
      setReminders([...reminders, res.data]);
      setTitle("");
      setDescription("");
      setRemindAt("");
    } catch (err) {
      setError("Failed to add reminder.");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reminders</h1>
        <button className="text-gray-600 hover:text-red-500">Logout</button>
      </div>

      {/* form */}
      <div className="bg-white p-8 rounded-xl shadow max-w-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6">Add Reminder</h2>

        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="datetime-local"
          value={remindAt}
          onChange={(e) => setRemindAt(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={addReminder}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Add Reminder
        </button>

        {error && <p className="text-red-600 mt-3">{error}</p>}
      </div>

      {/* your reminders */}
      <h2 className="text-2xl font-semibold mb-3">Your Reminders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        reminders.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-xl shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
            <p className="text-gray-600 mb-2">{r.description}</p>
            <p className="text-gray-500 mb-4">{r.remind_at}</p>

            <div className="flex gap-3">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-600 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
