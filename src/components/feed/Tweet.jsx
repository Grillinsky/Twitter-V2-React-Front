/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useCheckImg } from "../../hooks/useCheckImg";

import "./tweet.css";
import { Link } from "react-router-dom";

function Tweet({ data }) {
  console.log(data);
  const author = data.author;
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(data.createdAt);
  const checkImg = useCheckImg(author.avatar);

  return (
    <div className="d-flex tweet p-3 border ">
      <Link to={`/users/${author.username}`} className="link-to underline">
        <div className="d-inline-block">
          <img
            alt="User's profile image"
            src={
              checkImg
                ? checkImg
                : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
            }
            className="rounded-circle avatar-pic mx-4"
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
        <Link to={`/tweets/${data._id}`} className="link-to">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-baseline gap-1 mt-1">
              <button style={{ all: "unset" }}>
                {data.likes.length > 0 ? (
                  <div className="d-flex gap-1">
                    <img
                      alt="Active liked Icon"
                      src="/src/assets/twitter-icons/icons/like-active.svg"
                      className="like-icon"
                    />
                    <p className=" m-0">{data.likes.length} </p>
                  </div>
                ) : (
                  <div className="d-flex gap-1">
                    <img
                      alt="Unactive liked icon"
                      src="/src/assets/twitter-icons/icons/like.svg"
                    />
                  </div>
                )}
              </button>
            </div>
            {user.userId === author._id ? (
              <img
                alt="Delete Icon"
                src="/src/assets/twitter-icons/icons/delete.svg"
                className="d-flex justify-content-center align-items-end mx-4"
              />
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tweet;
