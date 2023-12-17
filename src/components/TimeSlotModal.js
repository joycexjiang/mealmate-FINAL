import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
import { Avatar, Text, Box } from "@chakra-ui/react";
import { ClockIcon } from "@radix-ui/react-icons";

const TimeSlotModal = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Box className="flex-none justify-between bg-white cursor-pointer">
        <Button
          className="w-full h-full flex-1 py-2"
          color="amber"
          variant="surface"
          radius="full"
          text-color="black"
        >
          <Flex width="100%" justify="between">
            <Text>11:00 am - 11:30 am</Text>
            <Flex gap="2">
              <Avatar
                className="w-5 h-5 bg-purple-500 rounded-full"
                fallback="A"
              />
              <Avatar
                className="w-5 h-5 bg-yellow-500 rounded-full"
                fallback="J"
              />
            </Flex>
          </Flex>
        </Button>
      </Box>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-lg border p-5 bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={2} // Adjust the side offset as needed
      >
        <div className="flex flex-col gap-2.5">
          <input
            className="text-yellow-300 text-xl font-bold outline-none border-none bg-transparent"
            type="text"
            placeholder="New event"
            style={{ "::placeholder": { opacity: 1, color: "#fcd34d" } }}
          />

          {/* TIMES */}
          <div className="flex w-full justify-between ">
            <div className="bg-gray-100 p-3 rounded-lg min-w-[193px] flex flex-col mr-2">
              <p className="text-gray-400 text-sm font-bold">FROM</p>
              <p className="text-gray-500 text-lg">8:30 AM</p>
              <p className="text-gray-500 text-sm">2 Dec 2022</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg min-w-[193px] flex flex-col ml-2">
              <p className="text-gray-400 text-sm font-bold">TO</p>
              <p className="text-gray-500 text-lg">9:00 AM</p>
              <p className="text-gray-500 text-sm">2 Dec 2022</p>
            </div>
          </div>

          {/* GUESTS */}
          <div className="bg-gray-100 p-3 rounded-lg w-full flex flex-col">
            <div className="flex flex-col">
              <Text className="text-gray-400 text-sm font-bold" as="b">
                GUESTS
              </Text>
              <div className="flex space-x-2 mt-2">
                <Avatar
                  className="w-8 h-8 bg-purple-500 rounded-full"
                  fallback="A"
                />
                <Avatar
                  className="w-8 h-8 bg-yellow-500 rounded-full"
                  fallback="J"
                />
              </div>
            </div>
          </div>

          {/* WHERE */}
          <div className="bg-gray-100 p-3 rounded-lg w-full flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-gray-400 text-sm font-bold">LOCATION</p>
              <Popover.Root>
                <Popover.Trigger>
                  <p className="text-gray-400 text-xs cursor-pointer">
                    3 suggestions
                  </p>
                </Popover.Trigger>
                <Popover.Content
                  className="bg-white shadow-md rounded-lg p-4"
                  style={{ width: 360 }}
                >
                  <div className="space-y-4">
                    <div className="flex w-full cursor-pointer justify-center flex-grow flex items-center justify-between">
                      <p className="flex-grow">John Jay</p>
                      <p className="text-gray-600">7:30 AM - 8:00 PM</p>
                      <p className="text-green-500 font-bold ml-2">
                        <ClockIcon />
                      </p>
                    </div>
                    <div className="flex w-full cursor-pointer justify-center flex-grow flex items-center justify-between">
                      <p className="flex-grow">JJ's Place</p>
                      <p className="text-gray-600">7:30 AM - 8:00 PM</p>
                      <p className="text-green-500 font-bold ml-2">
                        <ClockIcon />
                      </p>
                    </div>
                    <div className="flex w-full cursor-pointer justify-center flex-grow flex items-center justify-between">
                      <p className="flex-grow">Ferris</p>
                      <p className="text-gray-600">7:30 AM - 8:00 PM</p>
                      <p className="text-red-500 font-bold ml-2">
                        <ClockIcon />
                      </p>
                    </div>
                    <div className="flex w-full cursor-pointer justify-center flex-grow flex items-center justify-between">
                      <p className="flex-grow">Chef Don's</p>
                      <p className="text-gray-600">7:30 AM - 8:00 PM</p>
                      <p className="text-red-500 font-bold ml-2">
                        <ClockIcon />
                      </p>
                    </div>
                  </div>
                </Popover.Content>
              </Popover.Root>
            </div>

            <input
              className="bg-transparent text-gray-400 focus:outline-none placeholder-gray-400"
              type="text"
              placeholder="Add location"
              style={{ "::placeholder": { opacity: 1, color: "#BEBEBE" } }}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="bg-gray-100 p-3 rounded-lg w-full flex flex-col">
            <p className="text-gray-400 text-sm font-bold">DESCRIPTION</p>
            <input
              className="bg-transparent text-gray-400 focus:outline-none placeholder-gray-400"
              type="text"
              placeholder="Add description"
              style={{ "::placeholder": { opacity: 1, color: "#BEBEBE" } }}
            />
          </div>

          <div className="flex justify-end">
            <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Create
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default TimeSlotModal;
