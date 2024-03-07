import React, { useState } from "react";
import { Box, VStack, Text, Heading, Image, HStack, Divider, Spacer, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const WeatherCard = ({ day, icon, temp }) => (
  <VStack spacing={1}>
    <Text fontSize="sm" fontWeight="bold">
      {day}
    </Text>
    <Image src={`https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JpY29uJTdEJTIwaWNvbnxlbnwwfHx8fDE3MDk4MDE5MDR8MA&ixlib=rb-4.0.3&q=80&w=1080`} width={10} height={10} />
    <Text fontSize="sm">{temp}°</Text>
  </VStack>
);

const Index = () => {
  const [location, setLocation] = useState("San Francisco, CA");

  return (
    <Box p={4} bg="blue.500" minHeight="100vh">
      <VStack spacing={6}>
        <HStack>
          <IconButton icon={<FaMapMarkerAlt />} aria-label="Location" variant="ghost" color="white" />
          <Spacer />
          <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" color="white" />
        </HStack>
        <Heading color="white" fontSize="4xl">
          {location}
        </Heading>
        <Text color="white" fontSize="6xl" fontWeight="bold">
          72°
        </Text>
        <Text color="white" fontSize="xl">
          Partly Cloudy
        </Text>
        <HStack spacing={4}>
          <Text color="white">H:85°</Text>
          <Text color="white">L:62°</Text>
        </HStack>
        <Divider borderColor="white" />
        <HStack spacing={4}>
          <WeatherCard day="Today" icon="sun" temp={72} />
          <WeatherCard day="Wed" icon="cloud" temp={68} />
          <WeatherCard day="Thu" icon="cloud-sun" temp={71} />
          <WeatherCard day="Fri" icon="cloud-rain" temp={65} />
          <WeatherCard day="Sat" icon="sun" temp={74} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
