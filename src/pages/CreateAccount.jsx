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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission by saving data to mock server and local storage
    useMockServer().saveData("customers", formData);
    localStorage.setItem("customerData", JSON.stringify(formData));
    console.log("Data saved to mock server and local storage:", formData);
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
