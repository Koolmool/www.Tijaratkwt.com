import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
    alert("Login attempt with email: " + email + " and password: " + password);
  };
  return (
    <Container position="relative" overflow="hidden">
      <video
        autoPlay
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
        src="/assets/login-background.mp4"
      ></video>
      <Box>
        <Heading>Login Page</Heading>
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

          <Text mt={2} textAlign="right" color="brand.700" cursor="pointer" onClick={() => alert("Password recovery instructions will be sent to your email.")}>
            Forgot Password?
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
