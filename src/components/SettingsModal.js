import {
  Theme,
  DialogRoot,
  DialogContent,
  DialogClose,
} from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import { render } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
function SettingsModal() {
  return (
    <Theme>
      <DialogRoot>
        <DialogContent className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
            <div className="p-6">
              <DialogClose className="absolute top-0 right-0 m-4">
                <Cross2Icon className="w-6 h-6" />
              </DialogClose>
              <ul className="text-lg font-medium text-gray-900">
                <li className="border-b border-gray-200 py-2">Account</li>
                <li className="border-b border-gray-200 py-2">Availability</li>
                <li className="py-2">Sign out</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </DialogRoot>
    </Theme>
  );
}
export default SettingsModal;
