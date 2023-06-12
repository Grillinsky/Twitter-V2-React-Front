/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useCheckImg } from "../../hooks/useCheckImg";
import { Link, useNavigate } from "react-router-dom";
import { toggleLike } from "../reducers/tweetSlice";
import unlikedLogo from "../../assets/twitter-icons/icons/like.svg";
import likedLogo from "../../assets/twitter-icons/icons/like-active.svg";

import axios from "axios";

import "./tweet.css";
import { useEffect } from "react";

function Tweet({ tweet }) {
  const author = tweet.author;
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(tweet.createdAt);
  const checkImg = useCheckImg(author.avatar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerDeleteTweet = async () => {
    try {
      const res = axios.delete(`http://localhost:3000/tweets/${tweet.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      navigate(0, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handlerLikes = async () => {
   
    try {
      const res = await axios(`http://localhost:3000/tweets/${tweet.id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
      });

      dispatch(toggleLike({ user: user, tweetId: tweet.id }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

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
            alt={`${author.username}'s profile image`} //AGREGA ACCESIBILIDAD
          />
        </div>
      </Link>

      <div className="w-100">
        <Link to={`/users/${author.username}`} className="link-to underline">
          <p className="fw-bold d-inline">
            {author.firstname} {author.lastname}
          </p>
          <p className="text-secondary fw-medium d-inline ms-2">
            @{author.username} ·
          </p>
          <p className="text-secondary fw-medium d-inline ms-2">{formatDate}</p>
        </Link>
        <p className="fw-normal mb-0"> {tweet.content}</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-baseline gap-1 mt-1">
            <button style={{ all: "unset" }}>
              <div className="d-flex gap-1">
                <img
                  src={`${
                    tweet.likes.includes(user.id) ? likedLogo : unlikedLogo
                  } `}
                  className={`${
                    tweet.likes.includes(user.id)
                      ? "liked-icon"
                      : "unliked-icon"
                  } `}
                  role="button"
                  onClick={handlerLikes}
                  alt="Like btn active" //AGREGA ACCESIBILIDAD
                />
                <p className=" m-0">{tweet.likes.length} </p>
              </div>
            </button>
          </div>

          {user.id === author.id ? (
            <img
              src="/src/assets/twitter-icons/icons/delete.svg"
              className="d-flex justify-content-center align-items-end mx-4"
              alt="delete button" //AGREGA ACCESIBILIDAD
              role="button"
              onClick={handlerDeleteTweet}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
