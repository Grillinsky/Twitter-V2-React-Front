import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route
        path="/"
        element={
          user.token ? <Home /> : <Navigate to="/login" replace={true} />
        }
      />
    </Routes>
  );
}

export default App;
