import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-32 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Make Your Daily Routine Easy
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Track, organize, and communicate your daily tasks efficiently.
        </p>
        <button
          onClick={() => navigate("/reminders")}
          className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get in
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Learning starts with strong connections
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Options to help you power the relationships that support student success.
        </p>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Box 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-left hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">Remind Chat</h3>
            <p className="text-gray-600 mb-4">
              Fast, reliable communication, right on your phone
            </p>
            <ul className="list-disc ml-5 text-gray-500 mb-4">
              <li>Real-time notifications on any device, no smartphone required</li>
              <li>Automatic translation into your preferred language</li>
              <li>Personal information stays private so you can communicate with confidence</li>
            </ul>
            <button className="text-blue-600 font-bold hover:underline">Learn more</button>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-left hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">Remind Hub</h3>
            <p className="text-gray-600 mb-4">
              Centralize all your learning and communication tools in one place
            </p>
            <ul className="list-disc ml-5 text-gray-500 mb-4">
              <li>Access assignments and reminders easily</li>
              <li>Collaborate with your peers efficiently</li>
              <li>Track progress and notifications in one place</li>
            </ul>
            <button className="text-blue-600 font-bold hover:underline">Learn more</button>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-left hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">Reminder</h3>
            <p className="text-gray-600 mb-4">
              Keep your college schedule organized and never miss a deadline
            </p>
            <ul className="list-disc ml-5 text-gray-500 mb-4">
              <li>Create reminders for classes and exams</li>
              <li>Share schedules with classmates</li>
              <li>Stay on top of your academic life</li>
            </ul>
            <button className="text-blue-600 font-bold hover:underline">Learn more</button>
          </div>
        </div>
      </section>

      
    </div>
  );
}