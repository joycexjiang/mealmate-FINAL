import { CalendarIcon } from "@chakra-ui/icons";
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
    Grid,
    GridItem,
    Input,
    Link,
    Switch,
    Divider,
    useToast
  } from "@chakra-ui/react";
  import { User, Share } from "lucide-react"; //replace with chakra
  import React, { useState, useEffect } from "react";


//   import { render } from "react-dom";
// import React, { useState, useEffect, useRef } from "react";
  function Availability(){
    const [changesMade, setChangesMade] = useState(false);
    const toast = useToast();
  
    const handleCheckboxChange = () => {
      // Handle checkbox changes
      setChangesMade(true);
    };
  
    const handleSaveChanges = () => {
      if (changesMade) {
        // If changes were made, show "Changes saved" message
        toast({
          title: "Changes saved!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
  
        // Reset changesMade state
        setChangesMade(false);
  
        // Reload the page after 1 second
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // If no changes were made, inform the user
        toast({
          title: "No changes to save",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      }
    };
    return (
      <ChakraProvider>
        <Box p="4" bg="#F7FAFC" minH="100vh">
        <Grid templateColumns="repeat(12, 1fr)" gap={8}>
          <GridItem colSpan={10} colEnd={3}>
            {/* Navigation Bar */}
            <VStack spacing="20" align="flex-start">
              {/* Logo */}
              <HStack>
                <div
                  style={{
                    color: "#63B3ED",
                  }}
                />
                <Text fontSize="2xl" fontWeight="bold" mt="0" pt="0">
                <Link href="http://localhost:3000" _hover={{ textDecoration: "none" }} _active={{ textDecoration: "none" }}>
                  MEALMATE 
                </Link>
                </Text>
              </HStack>
              {/* Account */}
              <HStack>
                <Link href="http://localhost:3000/settings" textDecoration="none">
                  <HStack>
                    <User  size={21} />
                    <Text fontSize="sm" fontWeight="semibold">
                      Account Settings
                    </Text>
                  </HStack>
                </Link>
              </HStack>
              {/* Share Settings */}
              <HStack>
                <Link href="http://localhost:3000/availability" textDecoration="none" >
                  <HStack>
                  <Share size={21} />
                  <Text fontSize="sm"fontWeight="semibold">
                    Availability + Calendar
                  </Text>
                  </HStack>
                </Link>
              </HStack>
            </VStack>
          </GridItem>
          {/* Header */}
          <Flex justify="space-between" mb={10}>
            {/* Nav bar */}
            <HStack spacing={4}>
              <Icon as={Menu} w={6} h={6} />
            </HStack>
          </Flex>
          <Flex>

            <GridItem colStart={5} colSpan={20} bg="#F7FAFC" colEnd={10}>
                {/* Header */}
                <Text fontSize="2xl" fontWeight="bold" mb="6">
                Availability + Calendar
                </Text>
                {/* <Box borderWidth="1px" borderRadius="md" className="button" bg="#E5E4E2"paddingTop={1} paddingBottom={1}paddingLeft={2} paddingRight={2} mb={2} mt={2}>
                    <HStack spacing={3}>
                    <Button variant="outline" size="sm">
                        <Link href="http://localhost:3000/availability" textDecoration="none" >
                            Connected calendars
                        </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                            <Link href="http://localhost:3000/hours" textDecoration="none" >
                                Hours and Preferences
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                            <Link href="http://localhost:3000/slotoverride" textDecoration="none" >
                                Slot Override
                            </Link>
                        </Button>
                    </HStack>
                </Box> */}
              <Box>
                <Heading as="h3" size="sm" mb={4}>
                  Connected calendars
                </Heading>
                <Button variant="outline" size="sm" mb={6}>
                  Add calendar account
                </Button>
                <Box borderWidth="1px" borderRadius="md" p={4} mb={6}>
                  <HStack justifyContent="space-between">
                    <HStack>
                      <Icon as={CalendarIcon} color="gray.500" />
                      <Text>Google</Text>
                    </HStack>
                    <Text>lel2168@barnard.edu</Text>
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
                  <Checkbox  defaultCheckedonChange={handleCheckboxChange}> fall 2023 classes</Checkbox>
                  <Checkbox onChange={handleCheckboxChange}>work</Checkbox>
                  <Checkbox onChange={handleCheckboxChange}>health</Checkbox>
                  <Checkbox onChange={handleCheckboxChange}>clubs</Checkbox>
                </VStack>
                <Button colorScheme="blue" onClick={handleSaveChanges}>
                    Save changes
                </Button>
            {/* <Button colorScheme="blue">Save changes</Button> */}
              </Box>
            </GridItem>
          </Flex>
        </Grid>
        </Box>
      </ChakraProvider>
    );
  }
  export default Availability;