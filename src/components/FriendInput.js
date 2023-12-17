import React, { useState, useRef, useEffect } from "react";
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
import { Cross1Icon } from "@radix-ui/react-icons";
import "../styles/AddFriends.css";
import TagInput from "./TagInput";

function FriendInput() {
  const [tags, setTags] = useState([]);

  const addTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
  };

  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default FriendInput;
