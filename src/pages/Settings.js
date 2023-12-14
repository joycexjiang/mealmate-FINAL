import logo from './logo.svg';
import './App.css';
import { ExternalLinkIcon } from '@chakra-ui/icons'

import {
  extendTheme,
  ChakraProvider,
  Flex,
  Box, 
  Text,
  Stack,
  VStack,
  Heading,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input, 
  Link
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from 'react';


function Settings(props){

  const [loginForm, setloginForm] = useState({
    email: "",
    password: ""
  })

  const handlechange = (event) => {
    const { name, value } = event.target;
    setloginForm({
      ...loginForm,
      [name]: value,
    });
  };

  function logMeIn(event) {
    //idk
    event.preventDefault();
    console.log('logging in with:', loginForm);

    setloginForm(({
      email: "",
      password: ""}))

    event.preventDefault()
  }

  function handleChange(event) { 
    const {value, name} = event.target
    setloginForm(prevNote => ({
        ...prevNote, [name]: value})
    )}

  return (
    <div>
    <ChakraProvider>
      <Flex>
        <Stack>
        <Heading as="h2" size="me" padding="4">
              MealMate
        </Heading>
        <Box
          backgroundColor="pink"
          marginLeft="5"
          padding="4"
          borderRadius="lg"
          borderColor="yellow"
          borderStartWidth="5"
          boxShadow="md"
          maxWidth="sm"
          maxHeight="fit-content"
          marginTop="5"
        >
          <VStack spacing="5">
            
            {/* <Button
              width="fit-content"
            >
              Account
            </Button> */}
            <Link href='https://chakra-ui.com' isExternal>
               Account <ExternalLinkIcon />
            </Link>
            <Link href='https://chakra-ui.com' isExternal>
              Availability <ExternalLinkIcon />
            </Link>
            <Divider />
            <FormControl id="email">
              <FormLabel>Enter your email address</FormLabel>
              <Input 
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Your email address"
              value={loginForm.email} 
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Enter password</FormLabel>
              <Input 
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter password" 
              value={loginForm.password}
              />
            </FormControl>
            <Button 
            onClick={logMeIn}
            colorScheme="blue"
            width="full"
            >
              Submit
            </Button>
            <Text fontSize="xs" color="gray.500">
              By entering and clicking Next, you agree to the{" "}
              <Text as="span" color="blue.500">
                Terms, E-Sign Consent, & Privacy Policy
              </Text>
            </Text>
          </VStack>
          <Text
            fontSize="sm"
            color="blue.500"
            textAlign="center"
            marginTop="5"
          >
            Already have an account? Sign In
          </Text>
        </Box>
      </Stack>
    </Flex>

    </ChakraProvider>
      </div>
  );
}

export default Settings;