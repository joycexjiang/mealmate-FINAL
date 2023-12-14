//Login NOT SIGNING UP FOR A NEW ACCOUNT screen
import {
  Theme,
  Box,
  TextFieldRoot,
  TextFieldInput,
  Button,
} from "@radix-ui/themes";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import logoIcon from "../images/icon.svg";
import axios from "axios";

function Login(props) {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setloginForm({
      ...loginForm,
      [name]: value,
    });
  };

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function logMeIn(event) {
    //idk
    //    event.preventDefault();
    //    event.preventDefault();
    console.log("logging in with:", loginForm);

    axios({
      method: "POST",
      url: "/login",
      data: {
        email: loginForm.email,
        password: loginForm.password,
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

    setloginForm({
      email: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <Theme>
      <Box className="flex justify-center items-center h-screen bg-gray-100">
        <Box className="bg-white p-8 rounded-lg shadow-md w-96">
          <Box className="flex justify-center mb-6">
            <img
              src={logoIcon}
              alt="MealMate Logo"
              style={{ width: "60px", height: "60px" }}
              className="h-12" // Set width and height inline
            />
          </Box>
          <Box className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Enter your Columbia email address
              <TextFieldRoot className="mt-1">
                <TextFieldInput
                  className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                  placeholder="Your email address"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={loginForm.email}
                />
              </TextFieldRoot>
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Enter your password
              <TextFieldRoot className="mt-1">
                <TextFieldInput
                  className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
                  placeholder="Your password"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={loginForm.password}
                />
              </TextFieldRoot>
            </label>
          </Box>
          <Box className="flex mt-6">
            <Button
              onClick={logMeIn}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Link to={"/"}>Log in</Link>
            </Button>
          </Box>

          <Box className="mt-4 text-center">
            <Link to={"/signup"}>
              <Button className="text-sm">
                Don't have an account? Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Theme>
  );
}

export default Login;
