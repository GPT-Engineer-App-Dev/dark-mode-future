import { Container, Text, VStack, Heading, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://ltgfyospwvvjqtqpcqoe.supabase.co/v1/rest/events', {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z2Z5b3Nwd3Z2anF0cXBjcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjI0OTQsImV4cCI6MjAzMDgzODQ5NH0.S7VTW-mJ3HqpdE4xnIFh3Gl0Je0X8PUcuaOv_yFFXAo',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z2Z5b3Nwd3Z2anF0cXBjcW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjI0OTQsImV4cCI6MjAzMDgzODQ5NH0.S7VTW-mJ3HqpdE4xnIFh3Gl0Je0X8PUcuaOv_yFFXAo'
          }
        });
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
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
        <Button colorScheme="teal" size="lg" variant="solid" style={{ boxShadow: '0 0 12px rgba(0, 128, 128, 0.8)' }}>
          Subscribe to Updates
        </Button>
        <SimpleGrid columns={3} spacing={10}>
          {events.map(event => <EventCard key={event.id} name={event.name} date={event.date} />)}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const EventCard = ({ name, date }) => (
  <Box bg="gray.100" p={4} boxShadow="md" borderRadius="lg">
    <Text fontWeight="bold">{name}</Text>
    <Text>{new Date(date).toLocaleDateString()}</Text>
  </Box>
);

export default Index;