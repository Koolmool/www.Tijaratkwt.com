import React from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";

const CreateAccount = () => {
  return (
    <Container>
      <Box as="form" onSubmit={(e) => e.preventDefault()} p={4}>
        <Heading>Create Account Page</Heading>
        <Stack spacing={4} mt={8}>
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
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
