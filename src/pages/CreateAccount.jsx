import React, { useEffect, useState } from "react";
import { useMockServer } from "../mockServer";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";

const CreateAccount = () => {
  useEffect(() => {
    document.title = "Create Account";
  }, []);

  return (
    <Container>
      <Box as="form" onSubmit={handleSubmit} p={4}>
        <Heading>Create Account Page</Heading>
        <Stack spacing={4} mt={8} onChange={handleInputChange}>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input type="number" value={formData.age} />
          </FormControl>
          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select gender" value={formData.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <Input type="text" value={formData.location} />
          </FormControl>
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" value={formData.phoneNumber} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={formData.email} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={formData.password} />
          </FormControl>
          <Button type="submit" colorScheme="brand" size="lg" mt={4}>
            Create Account
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateAccount;
