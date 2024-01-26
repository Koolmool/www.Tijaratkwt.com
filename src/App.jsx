import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
import WebhookListener from "./components/WebhookListener";
import MockServerURLDisplay from "./components/MockServerURLDisplay"; // Import the MockServerURLDisplay component

function App() {
  return (
    <Router>
      <MockServerURLDisplay /> {/* Display the mock server URL at the top */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile/:customerId" element={<Profile />} />
      </Routes>
      <WebhookListener />
    </Router>
  );
}

export default App;
