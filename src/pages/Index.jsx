import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" color="white" style={{ fontFamily: 'Arial, sans-serif' }}>
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}>The Future of Software</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us to explore the latest trends and innovations in software development.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="gray.700">
          <Heading as="h2" size="lg" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}>Event Details</Heading>
          <Text mt={2}>Date: September 30, 2023</Text>
          <Text>Location: Virtual</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="gray.700">
          <Heading as="h2" size="lg" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}>Speakers</Heading>
          <Text mt={2}>John Doe - CTO at Tech Innovations</Text>
          <Text>Jane Smith - Lead Developer at DevWorks</Text>
        </Box>
        <Button colorScheme="teal" size="lg" variant="solid" style={{ boxShadow: '0 0 12px rgba(0, 128, 128, 0.8)' }}>
          Register Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;