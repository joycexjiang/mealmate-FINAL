import React from "react";
import { Text, Box } from "@radix-ui/themes";
import { Avatar } from "@chakra-ui/react";
import * as Popover from "@radix-ui/react-popover";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import SignOutButton from "./SignOutButton";

const SettingsModal = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Box className="flex-none justify-between bg-white p-4 cursor-pointer">
        <li className="flex items-center justify-between space-x-2">
          <li className="flex items-center justify-between space-x-2">
            <Avatar className="w-5 h-5 bg-yellow-500 rounded-full" />
            <Text className="text-sm font-semibold">Joyce Jiang</Text>
          </li>
          <QuestionMarkCircledIcon />
        </li>
      </Box>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-lg border p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2.5">
          <ul className="text-md font-medium text-gray-900">
            <li className="py-2">
              <a href="/settings">Account</a>
            </li>
            <li className="border-b border-gray-200 py-2 pb-4">
              <a href="/settings">Availability</a>
            </li>
            <SignOutButton />
          </ul>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default SettingsModal;
