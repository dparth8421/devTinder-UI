import React from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import { Profile } from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/test" element={<Profile/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
