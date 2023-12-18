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
  Flex,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { User, Share } from "lucide-react"; //replace with chakra
import { EmailIcon, LockIcon, SettingsIcon } from "@chakra-ui/icons";
import React, { useState, useEffect, useRef } from "react";

function Settings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showSamePasswordError, setShowSamePasswordError] = useState(false);
  const [shareWithFriends, setShareWithFriends] = useState(false);
  const [shareWithEveryone, setShareWithEveryone] = useState(false);
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const toast = useToast();

  const handleSavePassword = () => {
    if (newPassword.trim() === "") {
      if (!passwordSaved && !showPasswordError) {
        toast({
          title: "Enter a new password first",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setShowPasswordError(true);
      }
    } else if (oldPassword === newPassword) {
      if (!passwordSaved && !showSamePasswordError) {
        toast({
          title: "New password must be different from the old password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setShowSamePasswordError(true);
      }
    } else if (!passwordSaved) {
      toast({
        title: "Password saved!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setPasswordSaved(true);
      setShowPasswordError(false);
      setShowSamePasswordError(false);
      setOldPassword(""); // Reset the oldPassword state
      setNewPassword(""); // Reset the newPassword state
      setChangesMade(true);
    }
  };

  const handleSaveChanges = () => {
    if (changesMade) {
      // Additional logic for handling changes
      if (shareWithFriends || shareWithEveryone || receiveEmails) {
        // Proceed with saving changes
        toast({
          title: "Changes saved!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Inform the user that no changes were made
        toast({
          title: "No changes to save",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      }

      // Reset state variables
      setChangesMade(false);
      setShareWithFriends(false);
      setShareWithEveryone(false);
      setReceiveEmails(false);
    } else {
      // Inform the user that no changes were made
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
          <GridItem colSpan={7} colEnd={3}>
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
                <Link
                  href="http://localhost:3000/settings"
                  textDecoration="none"
                >
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
                <Link
                  href="http://localhost:3000/availability"
                  textDecoration="none"
                >
                  <HStack>
                    <Share size={21} />
                    <Text fontSize="sm" fontWeight="semibold">
                      Availability + Calendar
                    </Text>
                  </HStack>
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem colStart={5} colSpan={20} bg="#F7FAFC" colEnd={20}>
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
                <Input placeholder="Joyce Jiang" />
              </VStack>
              {/* Email */}
              <VStack spacing="1" align="flex-start">
                <Text fontSize="sm" color="gray.500">
                  Email
                </Text>
                <Input placeholder="lel2168@barnard.edu" />
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
                  <SettingsIcon size={24} />
                  <Text fontSize="lg" fontWeight="semibold">
                    Share Settings
                  </Text>
                </HStack>
                <Box>
                  <HStack justify="space-between">
                    <Text fontSize="sm">Share availability with friends</Text>
                    <Switch
                      onChange={() => setShareWithFriends(!shareWithFriends)}
                    />
                  </HStack>

                  <HStack justify="space-between">
                    <Text fontSize="sm">Share availability with everyone</Text>
                    <VStack spacing="4">
                      <Switch
                        onChange={() =>
                          setShareWithEveryone(!shareWithEveryone)
                        }
                      />
                    </VStack>
                  </HStack>
                  <HStack>
                    <Text fontSize="xs" color="gray.500">
                      This will share your availability with everyone on
                      MealMate
                    </Text>
                  </HStack>
                </Box>
              </VStack>
              {/* Email Notifications */}
              <VStack spacing="2" align="flex-start" marginTop="5">
                <Box justify="space-between">
                  <HStack justifyItems="space-between">
                    <EmailIcon size={24} />
                    <Text fontSize="lg" fontWeight="semibold">
                      Email Notifications
                    </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize="sm">
                      Receive emails whenever someone sends me an invite
                    </Text>
                    <Switch onChange={() => setReceiveEmails(!receiveEmails)} />
                  </HStack>
                </Box>
              </VStack>

              {/* Privacy */}
              <VStack spacing="1" align="flex-start">
                <HStack>
                  <LockIcon size={24} />
                  <Text fontSize="lg" fontWeight="semibold">
                    Privacy
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  Current password
                </Text>
                <Input type="password" placeholder="********" />
                <Text fontSize="sm" color="gray.500">
                  New password
                </Text>
                <Input
                  type="password"
                  placeholder="New password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button
                  className="Savepassword"
                  color="white"
                  size="lg"
                  variant="outline"
                  onClick={handleSavePassword}
                >
                  Save password
                </Button>
                {showPasswordError && (
                  <Text color="red.500" fontSize="sm" fontWeight="bold">
                    Enter a new password first
                  </Text>
                )}
                {showSamePasswordError && (
                  <Text color="red.500" fontSize="sm" fontWeight="bold">
                    New password must be different from the old password
                  </Text>
                )}
              </VStack>
              <Divider />

              <Button colorScheme="red" variant="link">
                DELETE MY ACCOUNT
              </Button>
              <Button colorScheme="blue" onClick={handleSaveChanges}>
                Save changes
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
export default Settings;
