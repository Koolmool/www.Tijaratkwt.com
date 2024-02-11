import React, { useEffect, useState } from "react";
import { useMockServer } from "../mockServer";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.example.com/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      // Moved the useMockServer hook call outside the handleSubmit function to use it correctly
      const { saveData, sendToCRM } = useMockServer();
      sendToCRM(formData); // Simulate sending data to the CRM server
      if (result.customerId) {
        saveData(result.customerId, formData); // Save the customer information to the mock server
      }
      console.log("Account information saved:", formData);
      window.location.href = `/profile/${result.customerId}`; // Redirect to the customer's profile page
    } catch (error) {
      console.error("A problem occurred while saving data:", error);
    }

    // Reset form data
    setFormData({
      age: "",
      gender: "",
      location: "",
      phoneNumber: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    document.title = "Create Account";
  }, []);

  return (
    <Container>
      <Box as="form" onSubmit={handleSubmit} p={4}>
        <Heading color="white">Create Account Page</Heading>
        <Stack spacing={4} mt={8}>
          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="secondName">
            <FormLabel>Second Name</FormLabel>
            <Input type="text" id="secondName" value={formData.secondName} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="phoneNumber">
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" id="address" value={formData.address} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" id="email" value={formData.email} onChange={handleInputChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" id="password" value={formData.password} onChange={handleInputChange} />
          </FormControl>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateAccount;
