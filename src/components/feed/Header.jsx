/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import { useCheckImg } from "../../hooks/useCheckImg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Header() {
  const user = useSelector((state) => state.user);
  const checkImg = useCheckImg(user.avatar);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [tweet, setTweet] = useState();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/tweets",
        data: { content: content },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTweet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tweet) {
      navigate(`/tweets/${tweet._id}`);
    }
  }, [tweet]);

  return (
    <div className="border border-top-0 container pt-2">
      <form method="post" onSubmit={handlerSubmit}>
        <div className="d-flex flex-column text-right mt-3">
          <div className="d-flex gap-2">
            <img
              id="headerImg"
              className="rounded-circle avatar-pic mx-4"
              src={
                checkImg
                  ? checkImg
                  : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
              }
              alt=""
            />
            <textarea
              className="form-control py-3 bg-transparent border-0"
              aria-label="Text"
              name="tweetContent"
              id="tweetContent"
              placeholder="What's happening?"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-feed my-3 p-2 text-center">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
