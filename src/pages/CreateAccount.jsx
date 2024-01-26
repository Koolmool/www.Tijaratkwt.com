import React, { useEffect, useState } from "react";
import { useMockServer } from "../mockServer";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    location: "",
    phoneNumber: "",
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

      // Assuming the mock server's saveData function works synchronously for the purpose of this example
      const result = await response.json();
      const { saveData } = useMockServer();
      saveData(result.customerId, formData); // Save the customer information to the mock server
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
        <Heading>Create Account Page</Heading>
        <Stack spacing={4} mt={8} onChange={handleInputChange}>
          {/* Form fields remain unchanged */}
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateAccount;
