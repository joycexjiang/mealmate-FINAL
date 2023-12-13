import { useState } from "react";
import axios from "axios";

function useToken() {
  function getToken() {
    const userToken = localStorage.getItem("token");
    return userToken && userToken;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  // Function to handle logout request
  function logoutUser() {
    axios
      .post("/logout") // Send a POST request to the /logout endpoint
      .then(() => {
        removeToken(); // Remove token if logout is successful
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }

  return {
    setToken: saveToken,
    token,
    removeToken,
    logoutUser, // Expose the logoutUser function to perform logout
  };
}

export default useToken;
