/* eslint-disable react/prop-types */
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useCheckImg } from "../../hooks/useCheckImg";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toggleFollow } from "../reducers/userSlice";

import "./header.css";

function Header({ user }) {
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkImg = useCheckImg(user.avatar);
  const location = useLocation();
  const params = useParams();

  const [followingsActive, setFollowingsActive] = useState("");
  const [followersActive, setFollowersActive] = useState("");
  const [tweetsActive, setTweetsActive] = useState("tab-active");

  const handlerFollow = async () => {
    try {
      const res = await axios(`http://localhost:3000/${user.username}/follow`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      dispatch(toggleFollow({ userToFollow: user }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("followings")) {
      setFollowingsActive("tab-active");
      setFollowersActive("");
      setTweetsActive("");
    } else if (location.pathname.includes("followers")) {
      setFollowingsActive("");
      setFollowersActive("tab-active");
      setTweetsActive("");
    } else {
      setFollowingsActive("");
      setFollowersActive("");
      setTweetsActive("tab-active");
    }
  }, [location]);

  return (
    <div className="d-flex flex-column profile-box border">
      <div className="container d-flex justify-content-between align-items-end p-0">
        <img
          src={
            checkImg
              ? checkImg
              : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
          }
          className="rounded-circle avatar-main"
        />
        {loggedUser.id !== user.id && (
          <a
            className={`nav-btn mx-4 ${
              loggedUser.following.includes(user.id)
                ? "btn-following"
                : "btn-follow"
            }`}
            type="button"
            onClick={handlerFollow}
          >
            {loggedUser.following.includes(user.id) ? "Following" : "Follow"}
          </a>
        )}
      </div>
      <div className="container d-flex flex-column mt-3 p-0 ps-3">
        <p className="mb-0 fw-bolder">
          {user.firstname} {user.lastname}
        </p>
        <div className="container d-flex justify-content-between p-0">
          <p className="desc-text-color fs-6 m-0">{user.username}</p>
          <div className="d-flex gap-2 me-4">
            <p className="d-inline fw-bolder">{user.following.length}</p>
            <p className="d-inline desc-text-color">Following</p>

            <p className="d-inline fw-bolder">{user.followers.length}</p>
            <p className="d-inline desc-text-color">Followers</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around text-center border-top">
        <a href={`/users/${params.username}`} className={`tab ${tweetsActive}`}>
          Tweets
        </a>
        <a
          href={`/users/${params.username}/followers`}
          className={`tab ${followersActive}`}
        >
          Followers
        </a>
        <a
          href={`/users/${params.username}/followings`}
          className={`tab ${followingsActive}`}
        >
          Following
        </a>
      </div>
    </div>
  );
}

export default Header;
