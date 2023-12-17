import React, { useState } from "react";
// import '@radix-ui/themes/styles.css';
import {
  Theme,
  Flex,
  Box,
  Heading,
  Avatar,
  Button,
  Text,
  IconButton,
  AlertDialog,
  Grid,
} from "@radix-ui/themes";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  CheckIcon,
  QuestionMarkCircledIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import "../App.css";
import CalendarBar from "../components/CalendarBar";
import FriendInput from "../components/FriendInput";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Theme>
      <Flex className="min-h-screen flex justify-between" direction="row">
        {/* sidebar */}
        <Flex
          direction="column"
          className="flex-none w-1/5 justify-between bg-white p-4 border-r border-gray-200"
        >
          <Box direction="column">
            <Heading as="h3" className="font-semibold text-lg mb-6">
              Meet with
            </Heading>
            <Flex as="ul" direction="column" gap="1.5" className="space-y-2">
              {/* PERSON 1 */}
              <li className="flex items-center justify-between space-x-2">
                <li className="flex items-center justify-between space-x-2">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text className="text-sm font-semibold">Aisha Patel</Text>
                </li>

                <Avatar className="w-5 h-5 bg-purple-500 rounded-full" />
              </li>
              {/* ANOTHER PERSON */}
              <li className="flex items-center justify-between space-x-2">
                <li className="flex items-center justify-between space-x-2">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text className="text-sm font-semibold">Sara Johnson</Text>
                </li>

                <Avatar className="w-5 h-5 bg-pink-500 rounded-full" />
              </li>
              {/* ANOTHER PERSON */}
              <li className="flex items-center justify-between space-x-2">
                <li className="flex items-center justify-between space-x-2">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text className="text-sm font-semibold">Ming Chen</Text>
                </li>

                <Avatar className="w-5 h-5 bg-blue-500 rounded-full" />
              </li>

              {/* ANOTHER PERSON */}
              <li className="flex items-center justify-between space-x-2">
                <li className="flex items-center justify-between space-x-2">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text className="text-sm font-semibold">Diego Ramirez</Text>
                </li>

                <Avatar className="w-5 h-5 bg-green-500 rounded-full" />
              </li>

              {/* ANOTHER PERSON */}
              <li className="flex items-center justify-between space-x-2">
                <li className="flex items-center justify-between space-x-2">
                  <Checkbox.Root className="CheckboxRoot" id="c1">
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <Text className="text-sm font-semibold">Fatima Khan</Text>
                </li>

                <Avatar className="w-5 h-5 bg-red-500 rounded-full" />
              </li>
            </Flex>
            <div className="mt-4">
              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button
                    variant="ghost"
                    className="items-center space-x-1 cursor-pointer"
                  >
                    <PlusIcon className="w-4 h-4 text-gray-600" />
                    <div className="text-gray-600 text-sm"> Add a friend</div>
                  </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 450 }}>
                  <AlertDialog.Title>Add friends</AlertDialog.Title>
                  <AlertDialog.Description size="2">
                    <FriendInput />
                  </AlertDialog.Description>

                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Cancel
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                      </button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </div>
          </Box>

          <Box className="flex-none justify-between bg-white p-4">
            <li className="flex items-center justify-between space-x-2">
              <li className="flex items-center justify-between space-x-2">
                <Avatar className="w-5 h-5 bg-yellow-500 rounded-full" />
                <Text className="text-sm font-semibold">Joyce Jiang</Text>
              </li>
              <QuestionMarkCircledIcon />
            </li>
          </Box>
        </Flex>
        {/* main calendar */}
        <Box className="flex-auto w-3/5 p-4">
          <Heading
            as="h2"
            className="mb-6 flex items-center justify-between font-semibold text-xl"
          >
            December 2023
          </Heading>
          {/* days of the month */}
          <CalendarBar />

          {/* </Box> */}
          <Flex>
            {/* Calendar Buttons */}
            <Box width="100%">
              <Grid columns="1" gap="0" className="border-r">
                {Array.from(
                  {
                    length: 11,
                  },
                  (_, i) => (
                    <Box key={i} className="border-b text-sm text-gray-500">
                      <Flex direction="column">
                        <Button
                          color="amber"
                          variant="surface"
                          radius="full"
                          text-color="black"
                        >
                          <Flex width="100%" justify="between">
                            <Text>
                              {`${((8 + i) % 12) + 1}:00 ${
                                (8 + i) % 24 >= 11 ? "pm" : "am"
                              } - ${((8 + i) % 12) + 1}:30 ${
                                (8 + i) % 24 >= 11 ? "pm" : "am"
                              }`}
                            </Text>
                            <Flex gap="2">
                              <Avatar className="w-5 h-5 bg-purple-500 rounded-full" />
                              <Avatar className="w-5 h-5 bg-purple-500 rounded-full" />
                            </Flex>
                          </Flex>
                        </Button>

                        <Button
                          color="amber"
                          variant="surface"
                          radius="full"
                          text-color="black"
                        >
                          <Flex width="100%" justify="between">
                            <Text>
                              {`${((8 + i) % 12) + 1}:30 ${
                                (8 + i) % 24 >= 11 ? "pm" : "am"
                              } - ${((8 + i + 1) % 12) + 1}:00 ${
                                (8 + i) % 24 >= 10 ? "pm" : "am"
                              }`}
                            </Text>
                            <Flex gap="2">
                              <Avatar className="w-5 h-5 bg-purple-500 rounded-full" />
                              <Avatar className="w-5 h-5 bg-purple-500 rounded-full" />
                            </Flex>
                          </Flex>
                        </Button>
                      </Flex>
                    </Box>
                  )
                )}
              </Grid>
            </Box>
          </Flex>

          <Flex className="absolute inset-y-0 left-60 pl-4 mt-14 gap-x-4">
            {Array.from(
              {
                length: 6,
              },
              (_, i) => (
                <Box key={i} className="h-6 bg-blue-100 rounded-md w-1/6"></Box>
              )
            )}
          </Flex>
        </Box>
      </Flex>
    </Theme>
  );
};

export default Home;
