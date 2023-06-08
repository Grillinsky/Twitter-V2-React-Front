/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";

import "./tweet.css";

function Tweet({ data }) {
  const author = data.author;
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(data.createdAt);

  return (
    <div className="d-flex tweet p-3 border ">
      <div className="d-inline-block">
        <img
          src={
            author.avatar
              ? author.avatar
              : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
          }
          className="rounded-circle avatar-pic me-4"
        />
      </div>
      <div className="w-100">
        <p className="fw-bold d-inline">
          {author.firstname} {author.lastname}
        </p>
        <p className="text-secondary fw-medium d-inline ms-2">
          {author.username} · {formatDate}
        </p>

        <p className="fw-normal mb-0"> {data.content}</p>
        <div className="d-flex justify-content-between">
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
          {user.userId === author._id ? (
            <img
              src="/img/twitter-icons/icons/delete.svg"
              className="d-flex justify-content-center align-items-end mx-4"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
