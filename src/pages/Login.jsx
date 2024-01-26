import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container>
      <Box>
        <Heading>Login Page</Heading>
        <Box as="form" p={4}>
          {/* Existing login form fields go here */}

          {/* Add a "Forgot Password?" link below the password field */}
          <Text mt={2} textAlign="right" color="brand.700" cursor="pointer" onClick={() => alert("Password recovery instructions will be sent to your email.")}>
            Forgot Password?
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
