import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Avatar,
  Text,
  IconButton,
  Grid,
} from "@radix-ui/themes";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  CheckIcon,
  QuestionMarkCircledIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../App.css";

const Home = () => {
  return (
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

            <li className="mt-4 flex items-center space-x-2">
              <Button
                variant="ghost"
                className="items-center space-x-1 cursor-pointer"
              >
                <PlusIcon className="w-4 h-4 text-gray-600" />
                Add a friend
              </Button>
            </li>
          </Flex>
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
          December 2023 bruh
          <Flex className="space-x-3">
            <IconButton
              variant="ghost"
              className="w-10 h-10 p-1 border rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </IconButton>
            <IconButton
              variant="ghost"
              className="w-10 h-10 p-1 border rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </IconButton>
          </Flex>
        </Heading>
        {/* days of the week */}
        <Grid
          columns="8"
          gap="space-between"
          className="pl-24 pr-24 flex items-center justify-between text-sm border-b"
        >
          <Text className="pb-2 text-gray-500">Sun</Text>
          <Text className="pb-2 text-gray-500">Mon</Text>
          <Text className="pb-2 text-gray-500">Tue</Text>
          <Text className="pb-2 text-gray-500">Wed</Text>
          <Text className="pb-2 text-gray-500">Thu</Text>
          <Text className="pb-2 text-gray-500">Fri</Text>
        </Grid>
        <Grid columns="1" gap="0" className="border-r">
          {Array.from(
            {
              length: 12,
            },
            (_, i) => (
              <Box key={i} className="py-4 border-b text-sm text-gray-500">
                {`${9 + i}:00 am`}
              </Box>
            )
          )}
        </Grid>
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
  );
};

export default Home;