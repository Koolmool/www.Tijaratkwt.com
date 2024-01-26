import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MockServerURLDisplay = () => {
  const mockServerURL = "https://mockserver.example.com"; // Replace with your actual mock server URL

  return (
    <Box p={4} bg="gray.100">
      <Text>Mock Server URL: {mockServerURL}</Text>
    </Box>
  );
};

export default MockServerURLDisplay;
