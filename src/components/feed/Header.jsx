/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container border">
      <form method="post">
        <div className="d-flex flex-column text-right mt-3">
          <div className="d-flex gap-2">
            <img
              id="headerImg"
              className="rounded-circle avatar-pic me-4"
              src={
                user.avatar
                  ? user.avatar
                  : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
              }
              alt=""
            />
            <textarea
              className="form-control py-3"
              aria-label="Text"
              name="tweetContent"
              id="tweetContent"
              placeholder="What's happening"
            ></textarea>
          </div>
          <button type="submit" className="nav-btn btn-tweet my-3 p-2">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
