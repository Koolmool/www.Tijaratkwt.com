import { Box, Button, Center, Container, Divider, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Heading fontSize={{ base: "3xl", md: "4xl" }} textAlign="center">
              Login to your account
            </Heading>
          </Center>
          <Box bg={useColorModeValue("white", "gray.700")} py="8" px={{ base: "4", md: "10" }} shadow="base" rounded={{ sm: "lg" }}>
            <Stack spacing="6">
              <Stack spacing="5">
                <Input placeholder="Enter your email" type="email" />
              </Stack>
              <Button variant="solid" colorScheme="blue" size="lg" fontSize="md">
                Sign in with Email <FaEnvelope style={{ marginLeft: "8px" }} />
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Center>
          <Divider />
          <Text fontSize="sm" whiteSpace="nowrap" color={useColorModeValue("gray.500", "gray.400")}>
            or continue with
          </Text>
          <Divider />
        </Center>
        <Stack spacing="4">
          <Button leftIcon={<FaGoogle />} variant="outline" size="lg">
            Sign in with Google
          </Button>
          <Button leftIcon={<FaApple />} variant="outline" size="lg" colorScheme="blackAlpha">
            Sign in with Apple
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
