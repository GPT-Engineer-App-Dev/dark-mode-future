import { useEffect, useState } from 'react';
import { Box, Text, VStack, Heading, Button, SimpleGrid, Card } from '@chakra-ui/react';

const Index = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('https://your-supabase-url/rest/v1/events', {
        headers: {
          'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
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
        <SimpleGrid columns={3} spacing={10}>
          {events.map(event => (
            <Box key={event.id} p={5} shadow='md' borderWidth='1px'>
              <Heading fontSize='xl'>{event.name}</Heading>
              <Text mt={4}>{new Date(event.date).toLocaleDateString()}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;