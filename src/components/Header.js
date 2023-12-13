import React from "react";
import axios from "axios";
import useToken from "./useToken";
import { Button } from "@chakra-ui/react";

function Header(props) {
  const { token, removeToken } = useToken();

  function logMeOut() {
    axios({
      method: "POST",
      url: "/logout",
    })
      .then((response) => {
        //  props.token()
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
    <header className="App-header">
      <Button onClick={logMeOut} colorScheme="blue">
        Logout
      </Button>
    </header>
  );
}

export default Header;
