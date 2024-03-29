import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMockServer } from "../mockServer";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { saveData } = useMockServer();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      // Correct the usage of useNavigate and saveData to redirect after successful login
      const navigate = useNavigate();
      navigate(`/profile/${result.customerId}`);
      saveData(result.customerId, { email, loginTime: new Date().toISOString() }); // Save the login data to the mock server
      navigate(`/profile/${result.customerId}`);
      console.log("Login data saved to server:", result);
    } catch (error) {
      console.error("A problem occurred during login:", error);
    }
  };
  return (
    <Container position="relative" overflow="hidden">
      <video
        autoPlay={true}
        muted
        loop
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: "-1",
        }}
        src="https://ai.invideo.io/workspace/1156e87f-b73e-4322-917c-72fc80f82fd3/v2-copilot/d45b1833-316a-4d50-8643-4da6009acbee"
      ></video>
      <video
        autoPlay={true}
        muted
        loop
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: "-1",
        }}
        src="https://artlist.io/stock-footage/clip/art-pattern-loop-vj/6055473"
      ></video>
      <Box style={{ position: "relative" }}>
        {" "}
        // Ensure the form content is above the video background
        <Heading color="white">Login Page</Heading>
        <Box as="form" onSubmit={handleLogin} p={4}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="brand" size="lg" mt={4}>
              Log In
            </Button>
          </Stack>

          <Text mt={2} textAlign="right" color="black" cursor="pointer" onClick={() => alert("Password recovery instructions will be sent to your email.")}>
            Forgot Password?
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
