import React from "react";
import { Flex, Link, Box, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.800" color="white" justifyContent="space-between" p={3} align="center">
      <Box>
        <Link as={RouterLink} to="/login" px={2}>
          Login
        </Link>
        <Link as={RouterLink} to="/create-account" px={2}>
          Create Account
        </Link>
      </Box>
      <Button onClick={() => useNavigate()(-1)} marginRight="4">
        Go Back
      </Button>
    </Flex>
  );
};
export default Navigation;
