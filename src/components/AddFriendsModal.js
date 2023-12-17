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

  const handleNextClick = () => {
    // Perform any necessary action related to the "Next" button click
    // Close the modal
    onClose();
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
                <div className="bubble-padding" key={idx}>
                  <div className="tag-bubble">
                    <span>{tag}</span>
                    <button type="button" onClick={() => removeTag(idx)}>
                      <Cross1Icon />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Spacer />

            <Flex>
              <Spacer />
              <Button
                colorScheme="blue"
                width="120px"
                onClick={handleNextClick}
              >
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
