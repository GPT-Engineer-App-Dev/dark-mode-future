import { useEffect, useState, Container, Text, VStack, Heading, Button, SimpleGrid, Box } from '@chakra-ui/react';

const [events, setEvents] = useState([]);

const Index = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://ltgfyospwvvjqtqpcqoe.supabase.co/api/rest/events', {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z2Z5b3Nwd3Z2anF0cXBjcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjI0OTQsImV4cCI6MjAzMDgzODQ5NH0.S7VTW-mJ3HqpdE4xnIFh3Gl0Je0X8PUcuaOv_yFFXAo',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z2Z5b3Nwd3Z2anF0cXBjcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjI0OTQsImV4cCI6MjAzMDgzODQ5NH0.S7VTW-mJ3HqpdE4xnIFh3Gl0Je0X8PUcuaOv_yFFXAo'
        }
      });
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <Container centerContent maxW="container.xl" height="100vh" bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)" color="white" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center" style={{ textShadow: '0 0 20px #00ffea' }}>The Future of Software</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us to explore the latest trends and innovations in software development.
        </Text>
        <SimpleGrid columns={3} spacing={10}>
          {events.map(event => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{event.name}</Heading>
              <Text mt={4}>{new Date(event.date).toLocaleDateString()}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;