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
import React, { useState, useEffect, useRef } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SelectSchool from "../components/SelectSchool";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();

  //need to modify to create an account
  const navigate = useNavigate();
  const [signInForm, setSigninForm] = useState({
    email: "",
    password: "",
    first: "",
    school: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninForm({
      ...signInForm,
      [name]: value,
    });
  };

  function createAccount(event) {
    event.preventDefault();
    console.log("logging in with:", signInForm);

    axios({
      method: "POST",
      url: "https://localhost:5067/signup",
      data: {
        email: signInForm.email,
        password: signInForm.password,
        first: signInForm.first,
        school: signInForm.school,
        year: signInForm.year,
      },
    })
      .then((response) => {
        props.setToken(response.data.access_token);
        navigate("/");
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
      school: "",
      year: "",
    });

    event.preventDefault();
  }

  //doesnt work yet
  const handleSchoolSelection = (selectedSchool) => {
    console.log(selectedSchool);
    setSigninForm((prevSignInForm) => ({
      ...prevSignInForm,

      school: selectedSchool, // Update the school value in the state
    }));
  };

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
            spacing="32px"
            maxWidth="1200px"
          >
            <VStack alignItems="flex-start" spacing="5" width="1/4">
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
              minWidth="md"
            >
              <VStack spacing="5">
                <Heading as="h2" size="lg">
                  Start using MealMate
                </Heading>

                <Divider />

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
                  <FormLabel>Enter name</FormLabel>
                  <Input
                    onChange={handleChange}
                    type="first"
                    name="first"
                    placeholder="Enter name"
                    value={signInForm.first}
                  />
                </FormControl>

                <FormControl id="school">
                  <FormLabel>Select school</FormLabel>
                  <SelectSchool onSelectSchool={handleSchoolSelection} />
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

              <Box className="mt-4 text-center">
                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default Signup;
