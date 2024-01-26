import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const Profile = () => {
  const { customerId } = useParams();

  // Dummy content for now, replace with actual profile data fetching and rendering
  return (
    <Box>
      <Text>Profile Page for Customer ID: {customerId}</Text>
    </Box>
  );
};

export default Profile;
