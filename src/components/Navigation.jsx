import React from "react";
import { Flex, Link, Box, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.800" color="white" justifyContent="space-between" p={3} align="center">
      {/* Create Account Link Removed */}
      <Button onClick={() => (window.location.href = "https://preview-ad3df2ed--product-details-ecommerce.gptengineer.run/")} marginRight="4">
        Go Back
      </Button>
    </Flex>
  );
};
export default Navigation;
