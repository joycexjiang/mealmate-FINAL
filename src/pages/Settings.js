
// import { ExternalLinkIcon } from '@chakra-ui/icons'

// import {
//   extendTheme,
//   ChakraProvider,
//   Flex,
//   Box, 
//   Text,
//   Stack,
//   VStack,
//   Heading,
//   Button,
//   Divider,
//   FormControl,
//   FormLabel,
//   Input, 
//   Link
// } from "@chakra-ui/react";
// import React, { useState, useEffect, useRef } from 'react';


// function Settings(props){

//   const [loginForm, setloginForm] = useState({
//     email: "",
//     password: ""
//   })

//   const handlechange = (event) => {
//     const { name, value } = event.target;
//     setloginForm({
//       ...loginForm,
//       [name]: value,
//     });
//   };

//   function logMeIn(event) {
//     //idk
//     event.preventDefault();
//     console.log('logging in with:', loginForm);

//     setloginForm(({
//       email: "",
//       password: ""}))

//     event.preventDefault()
//   }

//   function handleChange(event) { 
//     const {value, name} = event.target
//     setloginForm(prevNote => ({
//         ...prevNote, [name]: value})
//     )}

//   return (
//     <div>
//     <ChakraProvider>
//       <Flex>
//         <Stack>
//         <Heading as="h2" size="me" padding="4">
//               MealMate
//         </Heading>
//         <Box
//           backgroundColor="pink"
//           marginLeft="5"
//           padding="4"
//           borderRadius="lg"
//           borderColor="yellow"
//           borderStartWidth="5"
//           boxShadow="md"
//           maxWidth="sm"
//           maxHeight="fit-content"
//           marginTop="5"
//         >
//           <VStack spacing="5">
            
//             {/* <Button
//               width="fit-content"
//             >
//               Account
//             </Button> */}
//             <Link href='https://chakra-ui.com' isExternal>
//                Account <ExternalLinkIcon />
//             </Link>
//             <Link href='https://chakra-ui.com' isExternal>
//               Availability <ExternalLinkIcon />
//             </Link>
//             <Divider />
//             <FormControl id="email">
//               <FormLabel>Enter your email address</FormLabel>
//               <Input 
//               onChange={handleChange}
//               type="email"
//               name="email"
//               placeholder="Your email address"
//               value={loginForm.email} 
//               />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Enter password</FormLabel>
//               <Input 
//               onChange={handleChange}
//               type="password"
//               name="password"
//               placeholder="Enter password" 
//               value={loginForm.password}
//               />
//             </FormControl>
//             <Button 
//             onClick={logMeIn}
//             colorScheme="blue"
//             width="full"
//             >
//               Submit
//             </Button>
//             <Text fontSize="xs" color="gray.500">
//               By entering and clicking Next, you agree to the{" "}
//               <Text as="span" color="blue.500">
//                 Terms, E-Sign Consent, & Privacy Policy
//               </Text>
//             </Text>
//           </VStack>
//           <Text
//             fontSize="sm"
//             color="blue.500"
//             textAlign="center"
//             marginTop="5"
//           >
//             Already have an account? Sign In
//           </Text>
//         </Box>
//       </Stack>
//     </Flex>

//     </ChakraProvider>
//       </div>
//   );
// }

// export default Settings;



//---------------------------------------------------------------------

/* Settings Header */

import "../styles/Settings.css";
import availability from "./Availability";
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  VStack,
  Text,
  HStack,
  Input,
  Link,
  Switch,
  Button,
  Divider,
} from "@chakra-ui/react";
import { User, Share } from "lucide-react"; //replace with chakra
import { render } from "react-dom";
import { SettingsIcon
} from "@chakra-ui/icons"
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function Settings(){

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
                  MEALMATE 
                </Text>
              </HStack>
              {/* Account */}
              <HStack>
                <Link href="http://localhost:3000/settings" textDecoration="none">
                  <HStack>
                    <User size={21} />
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
                    Availability 
                  </Text>
                  </HStack>
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem colStart={5} colSpan={15} bg="#F7FAFC" colEnd={10}>
            {/* Settings Box */}

            {/* Header */}
            <Text fontSize="2xl" fontWeight="bold" mb="6">
              Account Settings
            </Text>

            <VStack spacing="6" align="flex-start">
              {/* Name */}
              <VStack spacing="1" align="flex-start">
                <Text fontSize="sm" color="gray.500">
                  Name
                </Text>
                <Input placeholder="Morty Smith" />
              </VStack>
              {/* Email */}
              <VStack spacing="1" align="flex-start">
                <Text fontSize="sm" color="gray.500">
                  Email
                </Text>
                <Input placeholder="uni@columbia.edu" />
                <Text fontSize="sm" color="blue.500">
                  Email not verified.{" "}
                  <Link href="#" textDecoration="underline">
                    Verify now
                  </Link>
                </Text>
              </VStack>
              {/* Share availability with friends */}
              <VStack spacing="3" align="flex-start">
                <HStack>
                  <Text fontSize="2md" fontWeight="semibold" mb="4">
                    Share Settings
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize="sm">Share availability with friends</Text>
                  <Switch />
                </HStack>
                <HStack>
                  <Text fontSize="sm">Share availability with everyone</Text>
                  <VStack spacing="4">
                    <div className="switch"><Switch /></div>
                    
                  </VStack>
                </HStack>
                <HStack>
                  <Text fontSize="xs" color="gray.500">
                    This will share your availability with everyone on MealMate
                  </Text>
                </HStack>
              </VStack>
              {/* Email Notifications */}
              <VStack spacing="1" align="flex-start">
                <HStack>
                  <SettingsIcon size={24} />
                  <Text fontSize="lg" fontWeight="semibold">
                    Email Notifications
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize="sm">
                    Receive emails whenever someone sends me an invite
                  </Text>
                  <Switch />
                </HStack>
              </VStack>
              {/* Privacy */}
              <VStack spacing="1" align="flex-start">
                <Text fontSize="lg" fontWeight="semibold">
                  Privacy
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Current password
                </Text>
                <Input type="password" placeholder="********" />
                <Text fontSize="sm" color="gray.500">
                  New password
                </Text>
                <Input type="password" placeholder="New password" />
                <Button className="Savepassword" colorScheme="white" variant="outline">
                  Save password
                </Button>
              </VStack>
              <Divider />
              
              <Button colorScheme="red" variant="link">
                DELETE MY ACCOUNT
              </Button>
              <Button colorScheme="blue">Save changes</Button>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
export default Settings;
// render(<Settings />, document.getElementById("root"));
