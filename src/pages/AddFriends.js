// AddFriends.js

import React, {useState} from 'react';

import "../styles/AddFriends.css";
import ModalInvite from '../components/ModalInvite'
import ModalRSVP from '../components/ModalRSVP'

import {
    Flex,
    Stack,
    // StackDivider,
    VStack,
    Box,
    Text,
    Heading,
    Button,
    Divider,
    Spacer,
    // Image, 
    // ButtonGroup,
    FormControl,
    FormLabel,
    Input,
    ChakraProvider,
  } from "@chakra-ui/react";


import {Cross1Icon} from '@radix-ui/react-icons'

import TagInput from '../components/TagInput'

function AddFriends(){

    //TAGS
    const [tags, setTags] = useState([]);

    const addTag = (newTag) => {
    setTags([...tags, newTag]);
    };

    const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
    };

    // let count = 0;
    function handleChange() {
        // console.log("changed." + count.toString());
        // count++;
    };

return (
    <ChakraProvider>
        {<ModalInvite />}
        {<ModalRSVP />}
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
            <Box
            backgroundColor="white"
            padding="1"
            borderRadius="lg"
            />

            <div className="bubble padding">
                <FormLabel>Friend's Email</FormLabel>
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
                <Button
                    // onClick={logMeIn}
                    width="120px"
                >
                    Skip
                </Button>
                <Spacer />
                <Button
                    // onClick={logMeIn}
                    colorScheme="blue"
                    width="120px"
                >
                    Next
                </Button>
            </Flex>
            </Box>
        </Stack>        
        </Flex>

    </ChakraProvider>

    );
}

export default AddFriends;