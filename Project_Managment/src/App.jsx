import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

