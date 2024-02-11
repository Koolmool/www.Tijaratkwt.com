import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useMockServer } from "../mockServer";

const Profile = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState({});
  const { getCustomerData, updateCustomerData } = useMockServer(); // Import useMockServer's getCustomerData and updateCustomerData

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    // Assuming updateCustomerData is a function provided by useMockServer to update the customer data
    // It should be implemented in the mockServer.js file.
    // Here, we're just simulating a save with a console log.
    console.log("Saving data...", customerData);
    // Uncomment the line below when updateCustomerData is implemented
    // await updateCustomerData(customerId, customerData);
  };

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
      <Box as="form">
        <VStack spacing={3} align="flex-start">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Customer Profile
          </Text>
          <FormControl id="customerName">
            <FormLabel>Name</FormLabel>
            <Input type="text" value={customerData.customerName} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="customerEmail">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={customerData.customerEmail} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="customerPhoneNumber">
            <FormLabel>Phone</FormLabel>
            <Input type="tel" value={customerData.customerPhoneNumber} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="customerAddress">
            <FormLabel>Address</FormLabel>
            <Input type="text" value={customerData.customerAddress} onChange={handleInputChange} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Profile;
