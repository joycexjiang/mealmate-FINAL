import React from "react";
import axios from "axios";
import useToken from "./useToken";
import { Button } from "@radix-ui/themes";

function SignOutButton() {
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
    <Button onClick={logMeOut} className="py-2">
      <a href="/login">Sign out</a>
    </Button>
  );
}

export default SignOutButton;
