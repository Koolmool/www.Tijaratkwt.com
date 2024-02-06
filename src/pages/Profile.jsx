import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useMockServer } from "../mockServer";

const Profile = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState({});
  const { getCustomerData } = useMockServer(); // Import useMockServer's getCustomerData

  // Assuming the mock server's database is an object where customer data can be retrieved using the customerId
  useEffect(() => {
    // Fetching customer data from the mock server's database
    const fetchCustomerData = async () => {
      // Fetching customer data from the mock server's database
      const data = getCustomerData(customerId); // Retrieve data from the mock server using getCustomerData
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
        <Text fontSize="2xl" fontWeight="bold" color="black">
          Customer Profile
        </Text>
        <Text color="black">Name: {customerData.customerName}</Text>
        <Text color="black">Email: {customerData.customerEmail}</Text>
        <Text color="black">Phone: {customerData.customerPhoneNumber}</Text>
        <Text color="black">Address: {customerData.customerAddress}</Text>
      </VStack>
    </Box>
  );
};

export default Profile;
