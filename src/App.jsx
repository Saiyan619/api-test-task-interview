import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/details/:userId" element={<UserDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
