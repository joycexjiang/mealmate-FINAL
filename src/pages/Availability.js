import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Menu,
    VStack,
    Text,
    Button,
    Checkbox,
  } from "@chakra-ui/react";
  import { Printer } from "lucide-react";
  import { render } from "react-dom";
  import React, { useState, useEffect, useRef } from "react";
  function availability() {
    return (
      <ChakraProvider>
        <Box bg="#F7FAFC" p={10}>
          {/* Header */}
          <Flex justify="space-between" mb={10}>
            <Heading as="h1" size="md">
              Mealmate
            </Heading>
            {/* Nav bar */}
            <HStack spacing={4}>
              {/* <Button variant="link" fontSize="md">
                Home
               </Button>
               <Button variant="link" fontSize="md">
                Settings
               </Button>
               <Button variant="link" fontSize="md">
                Log out
               </Button> */}
              <Icon as={Menu} w={6} h={6} />
            </HStack>
          </Flex>
          <Flex>
            <VStack align="start" spacing={4} w="200px">
              <Text fontWeight="semibold">Account</Text>
              <Text fontWeight="bold">Availability</Text>
            </VStack>
            <Box flex="1" bg="white" p={6} borderRadius="md" boxShadow="md">
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  Availability
                </Text>
              </Box>
              <HStack spacing={3} mb={3}>
                <Button
                  variant="outline"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  fontSize="sm"
                >
                  Connected calendars
                </Button>
                <Button
                  variant="outline"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  fontSize="sm"
                >
                  Hours & Preferences
                </Button>
                <Button
                  variant="outline"
                  borderWidth="1px"
                  borderRadius="md"
                  p={2}
                  fontSize="sm"
                >
                  Slot override
                </Button>
              </HStack>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  Connected calendars
                </Heading>
                <Button variant="outline" size="sm" mb={6}>
                  Add calendar account
                </Button>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={6}>
                  <HStack justifyContent="space-between">
                    <HStack>
                      <Icon as={Printer} color="gray.500" />
                      <Text>Google</Text>
                    </HStack>
                    <Text>uni@columbia.edu</Text>
                  </HStack>
                </Box>
                <Heading as="h3" size="md" mb={4}>
                  Configuration
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                  Set your calendar(s) to check for conflicts of your availability
                </Text>
                <VStack align="start" spacing={2} mb={6}>
                  <Checkbox defaultChecked>personal</Checkbox>
                  <Checkbox defaultChecked>fall 2023 classes</Checkbox>
                  <Checkbox>work</Checkbox>
                  <Checkbox>health</Checkbox>
                  <Checkbox>clubs</Checkbox>
                </VStack>
                <Button colorScheme="blue">Save changes</Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    );
  }
  export default Availability;