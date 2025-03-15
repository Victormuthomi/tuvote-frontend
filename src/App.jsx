import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"; // Protected page
import PrivateRoute from "./components/PrivateRoutes";
import Register from "./pages/register";
import Candidates from "./pages/candidates";
import CandidateDetails from "./components/CandidateDetails";
import Elections from "./pages/elections";
import ElectionVoting from "./pages/ElectionVoting";
import Results from "./pages/results";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  // Auto-detect system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setDarkMode(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidates/:id" element={<CandidateDetails />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/elections/:id/vote" element={<ElectionVoting />} />{" "}
          <Route path="/results" element={<Results />} />
          {/* Corrected Route */}
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
