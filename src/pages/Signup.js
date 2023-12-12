import {
  Flex,
  Stack,
  VStack,
  Box,
  Text,
  Heading,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  ChakraProvider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";

function Signup(props) {
  //need to modify to create an account
  const [signInForm, setSigninForm] = useState({
    email: "",
    password: "",
    first: "",
    last: "",
    school: "",
    year: "",
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setSigninForm({
      ...signInForm,
      [name]: value,
    });
  };

  function createAccount(event) {
    //idk
    event.preventDefault();
    console.log("logging in with:", signInForm);

    axios({
      method: "POST",
      url: "/signup", //THIS SHOULD BE CHANGED
      data: {
        email: signInForm.email,
        password: signInForm.password,
        first: signInForm.first,
        last: signInForm.last,
        school: signInForm.school,
        year: signInForm.year,
      },
    })
      .then((response) => {
        props.setToken(response.data.access_token);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setSigninForm({
      email: "",
      password: "",
      first: "",
      last: "",
      school: "",
      year: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setSigninForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div>
      <ChakraProvider>
        <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          padding="10"
        >
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing="24px"
            maxWidth="1200px"
          >
            <VStack alignItems="flex-start" spacing="5" width="full">
              <Box>
                <div size="32" />
                <Text fontSize="xl" fontWeight="bold">
                  MealMate
                </Text>
              </Box>
              <Heading as="h1" size="2xl">
                Discover a smarter way to share meals
              </Heading>
              <Text fontSize="md" color="gray.600">
                Connect your Google Calendar and unlock a world of
                possibilities. MealMate is designed to simplify your dining
                experience, making it effortless to connect with friends, fellow
                Columbia University students, and discover open dining halls
                that match your availability.
              </Text>
              <Text fontSize="md" color="gray.600">
                MealMate is tailored exclusively for Columbia University, so you
                can:
              </Text>
              <VStack alignItems="flex-start" spacing="2">
                <Text fontSize="md" color="gray.600">
                  📅 Sync your Google Calendar effortlessly.
                </Text>
                <Text fontSize="md" color="gray.600">
                  👥 Connect with friends, fellow students, and anyone you'd
                  like to share a meal with.
                </Text>
                <Text fontSize="md" color="gray.600">
                  🍽 Easily spot shared available slots that work for everyone.
                </Text>
                <Text fontSize="md" color="gray.600">
                  📍 Find dining halls that match your schedule seamlessly.
                </Text>
                <Text fontSize="md" color="gray.600">
                  📝 Make meal planning a breeze!
                </Text>
              </VStack>
              <Text fontSize="md" color="gray.600">
                Experience a whole new way of connecting over meals. Start using
                MealMate now and bring the Columbia University community closer,
                one meal at a time.
              </Text>
            </VStack>
            <Box
              backgroundColor="white"
              padding="8"
              borderRadius="lg"
              boxShadow="md"
              minWidth="sm"
            >
              <VStack spacing="5">
                <Heading as="h2" size="lg">
                  Start using MealMate
                </Heading>
                <Button
                  leftIcon={<div />}
                  colorScheme="blue"
                  variant="outline"
                  width="full"
                >
                  Sign up with Google
                </Button>
                <Divider />

                {/* 
                <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
            <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            className="input-field"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            className="input-field"
          />
         <input
            onChange={handleChange}
            type="first"
            name="first"
            placeholder="First"
            value={loginForm.first}
            className="input-field"
          />
     
         <input
            onChange={handleChange}
            type="last"
            name="last"
            placeholder="Last"
            value={loginForm.last}
            className="input-field"
          />
     
  
       <input
            onChange={handleChange}
            type="school"
            name="school"
            placeholder="School"
            value={loginForm.school}
            className="input-field"
          />
           
         <input
            onChange={handleChange}
            type="year"
            name="year"
            placeholder="year"
            value={loginForm.year}
            className="input-field"
          />
     
  
      <button onClick={logMeIn} className="submit-button">
            Submit
          </button>
            </form>
          </div> */}

                <FormControl id="email">
                  <FormLabel>Enter your email address</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={signInForm.email}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Enter password</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={signInForm.password}
                  />
                </FormControl>

                <FormControl id="first">
                  <FormLabel>Enter first name</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="first"
                    name="first"
                    placeholder="Enter first name"
                    value={signInForm.first}
                  />
                </FormControl>
                <FormControl id="last">
                  <FormLabel>Enter last name</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="last"
                    name="last"
                    placeholder="Enter last name"
                    value={signInForm.last}
                  />
                </FormControl>
                <FormControl id="school">
                  <FormLabel>Enter school</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="school"
                    name="school"
                    placeholder="Enter school"
                    value={signInForm.school}
                  />
                </FormControl>
                <FormControl id="year">
                  <FormLabel>Enter year</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="year"
                    name="year"
                    placeholder="Enter year"
                    value={signInForm.year}
                  />
                </FormControl>

                <Button onClick={createAccount} colorScheme="blue" width="full">
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

export default Signup;
