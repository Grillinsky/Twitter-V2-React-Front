import { useState } from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
