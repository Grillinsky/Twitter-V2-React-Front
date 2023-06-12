import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import { useSelector } from "react-redux";
import UserProfile from "./components/pages/UserProfile";
import UserFollowers from "./components/pages/UserFollowers";
import UserFollowings from "./components/pages/UserFollowings";
import Tweet from "./components/pages/Tweet";

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
          user && user.token ? (
            <Home />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/users/:username"
        element={
          user && user.token ? (
            <UserProfile />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/users/:username/followers"
        element={
          user && user.token ? (
            <UserFollowers />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/users/:username/followings"
        element={
          user && user.token ? (
            <UserFollowings />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
      <Route
        path="/tweets/:tweetId"
        element={
          user && user.token ? (
            <Tweet />
          ) : (
            <Navigate to="/login" replace={true} />
          )
        }
      />
    </Routes>
  );
}

export default App;
