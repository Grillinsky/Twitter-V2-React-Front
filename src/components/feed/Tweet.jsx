/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useCheckImg } from "../../hooks/useCheckImg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import unlikedLogo from "../../assets/twitter-icons/icons/like.svg";
import likedLogo from "../../assets/twitter-icons/icons/like-active.svg";

import "./tweet.css";

function Tweet({ tweet }) {
  console.log(tweet);
  console.log(tweet[0].author);
  const author = tweet.author;
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(tweet.createdAt);
  const checkImg = useCheckImg(author.avatar);
  const [liked, setLiked] = useState("unliked-icon");
  const [likes, setLikes] = useState([]);
  const [img, setImg] = useState(unlikedLogo);
  const [response, setResponse] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handlerLikes = async () => {
    try {
      const res = await axios(`http://localhost:3000/tweets/${tweet._id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
      });

      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(location.pathname);
    if (response) {
      navigate(location.pathname, { replace: true });
    }
  }, [response]);

  useEffect(() => {
    const getTweet = async () => {
      const res = await axios.get(`http://localhost:3000/tweets/${tweet._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setLikes(res.data.likes);

      if (res.data.likes.includes(user.userId)) {
        setLiked("liked-icon");
        setImg(likedLogo);
      } else {
        setLiked("unliked-icon");
        setImg(unlikedLogo);
      }
    };
    getTweet();
  }, []);

  return (
    <div className="d-flex tweet p-3 border ">
      <Link to={`/users/${author.username}`} className="link-to underline">
        <div className="d-inline-block">
          <img
            src={
              checkImg
                ? checkImg
                : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
            }
            className="rounded-circle avatar-pic me-4"
          />
        </div>
      </Link>

      <div className="w-100">
        <Link to={`/users/${author.username}`} className="link-to underline">
          <p className="fw-bold d-inline">
            {author.firstname} {author.lastname}
          </p>
          <p className="text-secondary fw-medium d-inline ms-2">
            {author.username} ·
          </p>
          <p className="text-secondary fw-medium d-inline ms-2">{formatDate}</p>
        </Link>
        <p className="fw-normal mb-0"> {tweet.content}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-baseline gap-1 mt-1">
            <button style={{ all: "unset" }}>
              <div className="d-flex gap-1">
                <img
                  src={img}
                  className={` ${liked}`}
                  role="button"
                  onClick={handlerLikes}
                />
                <p className=" m-0">{tweet.likes.length} </p>
              </div>
            </button>
          </div>

          {user.userId === author._id ? (
            <img
              src="/src/assets/twitter-icons/icons/delete.svg"
              className="d-flex justify-content-center align-items-end mx-4"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
