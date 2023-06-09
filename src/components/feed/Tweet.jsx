/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useCheckImg } from "../../hooks/useCheckImg";

import axios from "axios";

import "./tweet.css";
import { Link, useNavigate } from "react-router-dom";

function Tweet({ data }) {
  const [deleted, setDeleted] = useState();
  const author = data.author;
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(data.createdAt);
  const checkImg = useCheckImg(author.avatar);
  const navigate = useNavigate();

  const handlerDeleteTweet = async () => {
    console.log(data._id);
    console.log(user.token);
    try {
      const res = axios.delete(`http://localhost:3000/tweets/${data._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setDeleted(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (deleted) {
      navigate(`/users/${user.username}`);
    }
  }, [deleted]);

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

        <p className="fw-normal mb-0"> {data.content}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/tweets/${data._id}`} className="link-to">
            <div className="d-flex align-items-baseline gap-1 mt-1">
              <button style={{ all: "unset" }}>
                {data.likes.length > 0 ? (
                  <div className="d-flex gap-1">
                    <img
                      src="/src/assets/twitter-icons/icons/like-active.svg"
                      className="like-icon"
                    />
                    <p className=" m-0">{data.likes.length} </p>
                  </div>
                ) : (
                  <div className="d-flex gap-1">
                    <img src="/src/assets/twitter-icons/icons/like.svg" />
                  </div>
                )}
              </button>
            </div>
          </Link>
          {user.userId === author._id ? (
            <img
              src="/src/assets/twitter-icons/icons/delete.svg"
              className="d-flex justify-content-center align-items-end mx-4"
              onClick={handlerDeleteTweet}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
