import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginComponent";
import SignUp from "./SignupComponent";

function App() {
  return (
    <div className="app-container">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
