import { Box, Button, Center, Container, Divider, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const emailInputRef = useRef(null);

  const handleAccountCreation = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    console.log("Account creation requested for:", email);
    // Here we would typically send the email to the backend for account creation and data saving
  };
  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
              Welcome Back to Tijarat
            </Heading>
          </Center>
          <form onSubmit={handleAccountCreation}>
            <Box bg={useColorModeValue("white", "gray.700")} py="8" px={{ base: "4", md: "10" }} shadow="base" rounded={{ sm: "lg" }}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <Input placeholder="Enter your email" type="email" ref={emailInputRef} />
                </Stack>
                <Stack spacing="5">
                  <Button type="submit" variant="solid" colorScheme="brand" size="lg" fontSize="md" color="black">
                    Sign in with Email <FaEnvelope style={{ marginLeft: "8px" }} />
                  </Button>
                  <Text textAlign="center" color={useColorModeValue("gray.600", "gray.200")}>
                    New to Tijarat?{" "}
                    <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
                      Click here to verify your account
                    </a>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
        <Center>
          <Divider />
          <Text fontSize="sm" whiteSpace="nowrap" color={useColorModeValue("gray.500", "gray.400")}>
            or continue with
          </Text>
          <Divider />
        </Center>
        <Stack spacing="4">
          <Button leftIcon={<FaGoogle />} variant="outline" size="lg" colorScheme="brand">
            Sign in with Google
          </Button>
          <Button leftIcon={<FaApple />} variant="outline" size="lg" colorScheme="blackAlpha">
            Sign in with Apple
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Yahoo
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Outlook
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Facebook
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Instagram
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Snapchat
          </Button>
          <Button variant="outline" size="lg" colorScheme="brand">
            Sign in with Samsung
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
