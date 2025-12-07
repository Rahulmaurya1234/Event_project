import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Reminders from "./pages/Reminders"; // path aapke project ke hisab se sahi karein



import './index.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Reminders" element={<Reminders />} />
        {/* <div className="bg-blue-500 text-white p-10 rounded-lg">
  Tailwind is working!
</div> */}
     </Routes>
  <Footer />
    </BrowserRouter>
  );
}
// const routes = createRoutesFromElements(
//   <>
//     <Route index loader={reminders} Component={reminders} />
//     <Route path="/login" loader={login} Component={Login} />
//     <Route path="/register" loader={register} Component={registere} />
//   </>
// );
export default App;
