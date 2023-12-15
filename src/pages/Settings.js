
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

import {
  ChakraProvider,
  Box,
  VStack,
  Text,
  Divider,
  Input,
  Link,
  Switch,
  Button,
} from "@chakra-ui/react";
import { User, Share } from "lucide-react";
import { render } from "react-dom";
import { SettingsIcon
} from "@chakra-ui/icons"
import React, { useState, useEffect, useRef } from "react";

function Settings(){
  return (
    <ChakraProvider>
      <Box p="4" bg="#F7FAFC" minH="100vh">
        {/* Added Box component for the sidebar */}
        <Box
          maxW="400px"
          mx="auto"
          bg="white"
          p="6"
          borderRadius="md"
          boxShadow="sm"
        >
          <VStack spacing="6" align="flex-start">
            {/* Added Box component for the logo */}
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                MEALMATE
              </Text>
            </Box>
            <Divider />
            {/* Added another VStack for the sidebar */}
            <VStack spacing="6" align="flex-start">
              <VStack spacing="1" align="flex-start">
                <Text fontSize="lg" fontWeight="semibold">
                  <User size={24} /> Account
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Name
                </Text>
                <Input placeholder="Morty Smith" />
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
              <VStack spacing="1" align="flex-start">
                <Text fontSize="lg" fontWeight="semibold">
                  <Share size={24} /> Share Settings
                </Text>
                <VStack spacing="3" align="flex-start">
                  <Box>
                    <Text fontSize="sm">Share availability with friends</Text>
                    <Switch />
                  </Box>
                  <Box>
                    <Text fontSize="sm">Share availability with everyone</Text>
                    <Text fontSize="xs" color="gray.500">
                      This will share your availability with everyone on
                      MealMate
                    </Text>
                    <Switch />
                  </Box>
                </VStack>
              </VStack>
              <VStack spacing="1" align="flex-start">
                <Text fontSize="lg" fontWeight="semibold">
                  <SettingsIcon size={24} /> Email Notifications
                </Text>
                <Box>
                  <Text fontSize="sm">
                    Receive emails whenever someone sends me an invite
                  </Text>
                  <Switch />
                </Box>
              </VStack>
              <VStack spacing="1" align="flex-start">
                <Text fontSize="lg" fontWeight="semibold">
                  Privacy
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Current password
                </Text>
                <Input placeholder="********" />
                <Text fontSize="sm" color="gray.500">
                  New password
                </Text>
                <Input placeholder="New password" />
                <Button colorScheme="blue" variant="outline">
                  Save password
                </Button>
              </VStack>
              <Divider />
              <Button colorScheme="red" variant="link">
                DELETE MY ACCOUNT
              </Button>
              <Button colorScheme="blue">Save changes</Button>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default Settings();
// render(<Settings />, document.getElementById("root"));
