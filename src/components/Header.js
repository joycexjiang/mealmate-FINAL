import React from "react";
import axios from "axios";
import useToken from "./useToken";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { token, removeToken } = useToken();

  function logMeOut() {
    axios({
      method: "POST",
      url: "/logout",
    })
      .then((response) => {
        removeToken();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div className="border border-b px-6 pb-3 pt-3 flex items-center justify-end">
      <Button
        onClick={logMeOut}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <a href="/login">Log out</a>
      </Button>
    </div>
  );
}

export default Header;
