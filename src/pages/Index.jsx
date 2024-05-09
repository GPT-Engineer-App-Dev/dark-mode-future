import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)" color="white" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 1)' }}>The Future of Software</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us to explore the latest trends and innovations in software development.
        </Text>
        <Button colorScheme="teal" size="lg" variant="solid" style={{ boxShadow: '0 0 12px rgba(0, 128, 128, 0.8)' }}>
          Register Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;