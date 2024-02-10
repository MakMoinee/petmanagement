import { useEffect, useState } from "react";
import "./App.css";
import LandingScreen from "./Screens/LandingScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardScreen from "./Screens/DashboardScreen";
import PetsScreen from "./Screens/PetsScreen";
import Appointment from "./Screens/Appointment";

function App() {
  const initialLoginStatus = localStorage.getItem("isLoggedIn") === "true"; // Corrected the comparison
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginStatus);

  // Update localStorage when login status changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <LandingScreen onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <DashboardScreen onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/pets"
          element={
            isLoggedIn ? (
              <PetsScreen onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
         <Route
          path="/appointments"
          element={
            isLoggedIn ? (
              <Appointment onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
