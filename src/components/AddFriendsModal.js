import React, { useState, useRef, useEffect } from "react";
import {
  Flex,
  VStack,
  Box,
  Text,
  Heading,
  Button,
  Spacer,
  FormControl,
  FormLabel,
  ChakraProvider,
} from "@chakra-ui/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import "../styles/AddFriends.css";
import TagInput from "./TagInput";

function AddFriendsModal({ onClose }) {
  const [tags, setTags] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const addTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
  };

  return (
    <ChakraProvider>
      <div className="modal-overlay">
        <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="9999"
          backgroundColor="rgba(0, 0, 0, 0.5)" // Semi-transparent gray overlay
        >
          <Box
            backgroundColor="white"
            padding="8"
            borderRadius="lg"
            boxShadow="md"
            minWidth="sm"
            minHeight="md"
            display="flex"
            flexDirection="column"
          >
            <VStack spacing="5">
              <Heading as="h2" size="lg">
                Start adding friends
              </Heading>
            </VStack>
            <Box backgroundColor="white" padding="1" borderRadius="lg" />

            <div className="bubble pt-4">
              <FormLabel>Friend's email</FormLabel>
              {/* Render the TagInput component */}
              <TagInput onAddTag={addTag} />{" "}
              {tags.map((tag, idx) => (
                <div className="bubble-padding">
                  <div
                    key={idx}
                    className="tag-bubble"
                    // className="bg-indigo-200 rounded-full px-3 py-1 text-sm text-indigo-800 mr-2 mt-2 flex items-center border border-indigo-300"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(idx)}
                      //   className="tag-remove"
                      //   className="ml-2 focus:outline-none text-indigo-600 hover:text-indigo-800"
                    >
                      <Cross1Icon />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Spacer />

            <Flex>
              <Spacer />
              <Button colorScheme="blue" width="120px">
                Add
              </Button>
            </Flex>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default AddFriendsModal;
