import { Theme, Grid, Box } from "@radix-ui/themes";
import { render } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const CalendarBar = () => {
  return (
    <Theme>
      <div className="flex items-center justify-between p-2 rounded-lg shadow bg-gray-100 mb-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <ChevronLeftIcon />
        </div>
        <Grid className="grid grid-flow-col auto-cols-max gap-4">
          <Box className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-2 pl-8 pr-8 ml-4 mr-4">
            <span className="text-blue-500 font-semibold">Sun</span>
            <span className="text-blue-500 font-bold">2</span>
          </Box>
          <Box className="flex flex-col items-center justify-center p-2 pl-12 pr-12  ml-4 mr-4">
            <span className="text-gray-600 font-semibold">Mon</span>
            <span className="text-gray-600 font-bold">3</span>
          </Box>
          <Box className="flex flex-col items-center justify-center p-2 pl-12 pr-12  ml-4 mr-4">
            <span className="text-gray-600 font-semibold">Tue</span>
            <span className="text-gray-600 font-bold">4</span>
          </Box>
          <Box className="flex flex-col items-center justify-center p-2 pl-12 pr-12  ml-4 mr-4">
            <span className="text-gray-600 font-semibold">Wed</span>
            <span className="text-gray-600 font-bold">5</span>
          </Box>
          <Box className="flex flex-col items-center justify-center p-2 pl-12 pr-12  ml-4 mr-4">
            <span className="text-gray-600 font-semibold">Thu</span>
            <span className="text-gray-600 font-bold">6</span>
          </Box>
          <Box className="flex flex-col items-center justify-center p-2 pl-12 pr-12  ml-4 mr-4">
            <span className="text-gray-600 font-semibold">Fri</span>
            <span className="text-gray-600 font-bold">7</span>
          </Box>
        </Grid>
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <ChevronRightIcon />
        </div>
      </div>
    </Theme>
  );
};
export default CalendarBar;
