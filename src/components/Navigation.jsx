import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.800" color="white" justifyContent="space-between" p={3} align="center">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/login" px={2}>
          Login
        </Link>
        <Link as={RouterLink} to="/create-account" px={2}>
          Create Account
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
