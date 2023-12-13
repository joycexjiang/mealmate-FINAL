import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Header from "./components/Header";
import useToken from "./components/useToken";

function App() {
  // const isUserSignedIn = !!localStorage.getItem("token");

  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>

	<div className="App">
           <Header token={removeToken} />
           {!token && token !== "" && token !== undefined ? (
             <Login setToken={setToken} />
           ) : (
             <>
		<Routes>
		   <Route exact path="/" element={<Home token={token} setToken={setToken}/>}></Route>
		
		</Routes>
            </>
          )}
        </div>
    </BrowserRouter>
  );
}

export default App;
