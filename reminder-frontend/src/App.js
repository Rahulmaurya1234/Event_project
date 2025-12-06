// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Reminders from "./Reminders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reminder/reminders" element={<Reminders />} />
      </Routes>
    </Router>
  );
}

export default App;
