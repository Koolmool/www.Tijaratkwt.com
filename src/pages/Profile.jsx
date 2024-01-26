import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useMockServer } from "../mockServer";

const Profile = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState({});
  const { saveData } = useMockServer(); // Import useMockServer's saveData

  useEffect(() => {
    // Simulate fetching customer data from the mock server
    // In a real application, you would fetch this data from an actual server
    const data = {
      customerId: customerId,
      customerName: "Jane Doe",
      customerEmail: "jane.doe@example.com",
      customerPhoneNumber: "123-456-7890",
      customerAddress: "123 Main Street, Anytown",
    };
    saveData(customerId, data); // Save data to the mock server
    setCustomerData(data);
  }, [customerId, saveData]);

  if (!customerData.customerId) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box p={5}>
      <VStack spacing={3} align="flex-start">
        <Text fontSize="2xl" fontWeight="bold">
          Customer Profile
        </Text>
        <Text>Name: {customerData.customerName}</Text>
        <Text>Email: {customerData.customerEmail}</Text>
        <Text>Phone: {customerData.customerPhoneNumber}</Text>
        <Text>Address: {customerData.customerAddress}</Text>
      </VStack>
    </Box>
  );
};

export default Profile;
