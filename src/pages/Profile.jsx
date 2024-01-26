import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useMockServer } from "../mockServer";

const Profile = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState({});
  const { saveData } = useMockServer(); // Import useMockServer's saveData

  // Assuming the mock server's database is an object where customer data can be retrieved using the customerId
  useEffect(() => {
    // Fetching customer data from the mock server's database
    const fetchCustomerData = async () => {
      const data = await saveData(customerId); // Retrieve data from the mock server
      setCustomerData(data);
    };
    fetchCustomerData();
  }, [customerId]);

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
