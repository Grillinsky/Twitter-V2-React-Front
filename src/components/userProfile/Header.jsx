/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useCheckImg } from "../../hooks/useCheckImg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({ data }) {
  const user = useSelector((state) => state.user);
  const checkImg = useCheckImg(data.avatar);
  const location = useLocation();

  const [followingsActive, setFollowingsActive] = useState("");
  const [followersActive, setFollowersActive] = useState("");
  const [tweetsActive, setTweetsActive] = useState("tab-active");

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
        {user.username === data.username ? (
          <a className="nav-btn btn-follow mx-4">Follow</a>
        ) : null}
      </div>
      <div className="container d-flex flex-column mt-3 p-0 ps-3">
        <p className="mb-0 fw-bolder">
          {data.firstname} {data.lastname}
        </p>
        <div className="container d-flex justify-content-between p-0">
          <p className="desc-text-color fs-6 m-0">{data.username}</p>
          <div className="d-flex gap-2 me-4">
            <p className="d-inline fw-bolder">{data.following.length}</p>
            <p className="d-inline desc-text-color">Following</p>

            <p className="d-inline fw-bolder">{data.followers.length}</p>
            <p className="d-inline desc-text-color">Followers</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around text-center border-top">
        <a href={`/users/${data.username}`} className={`tab ${tweetsActive}`}>
          Tweets
        </a>
        <a
          href={`/users/${data.username}/followers`}
          className={`tab ${followersActive}`}
        >
          Followers
        </a>
        <a
          href={`/users/${data.username}/followings`}
          className={`tab ${followingsActive}`}
        >
          Following
        </a>
      </div>
    </div>
  );
}

export default Header;
