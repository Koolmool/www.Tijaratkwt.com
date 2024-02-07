import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
import WebhookListener from "./components/WebhookListener";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation"; // Import the Navigation component
import MockServerURLDisplay from "./components/MockServerURLDisplay"; // Import the MockServerURLDisplay component

function App() {
  return (
    <Router>
      <Box bg="black" w="100%" p={2} color="white">
        {/* Maroon bar at the top of the page */}
      </Box>
      <MockServerURLDisplay />
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
