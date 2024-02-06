import { Box, Button, Center, Container, Divider, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { FaGoogle, FaApple, FaEnvelope, FaYahoo, FaWindows, FaFacebookF, FaInstagram } from "react-icons/fa";

const Index = () => {
  const emailInputRef = useRef(null);

  // Removed the useMockServer call since it's not defined
  const saveAccountInformation = (email) => {
    console.log(`Account creation requested for:`, email);
  };

  const handleAccountCreation = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;

    // Save the user's account information
    saveAccountInformation(email);

    console.log("Account creation requested for:", email);
  };
  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" color="black">
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
                  <Text textAlign="center" color="black">
                    New to Tijarat?{" "}
                    <a href="/create-account" style={{ color: "blue", fontWeight: "bold" }}>
                      Click here to create your own account in Tijarat
                    </a>{" "}
                    or{" "}
                    <a href="/login" style={{ color: "blue", fontWeight: "bold" }}>
                      log in
                    </a>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
        <Center>
          <Divider />
          <Text fontSize="sm" whiteSpace="nowrap" color="black">
            or continue with
          </Text>
          <Divider />
        </Center>
        <Stack spacing="4">
          <Button leftIcon={<FaGoogle size="20px" />} variant="outline" size="sm" colorScheme="brand">
            Sign in with Google
          </Button>
          <Button leftIcon={<FaApple size="20px" />} variant="outline" size="sm" colorScheme="blackAlpha">
            Sign in with Apple
          </Button>
          <Button leftIcon={<FaYahoo size="20px" />} variant="outline" size="sm" colorScheme="brand">
            Sign in with Yahoo
          </Button>
          <Button leftIcon={<FaWindows size="20px" />} variant="outline" size="sm" colorScheme="brand">
            Sign in with Outlook
          </Button>
          <Button leftIcon={<FaFacebookF size="20px" />} variant="outline" size="sm" colorScheme="brand">
            Sign in with Facebook
          </Button>
          <Button leftIcon={<FaInstagram size="20px" />} variant="outline" size="sm" colorScheme="brand">
            Sign in with Instagram
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
