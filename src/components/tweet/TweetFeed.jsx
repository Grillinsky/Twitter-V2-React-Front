/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { useCheckImg } from "../../hooks/useCheckImg";
import { Link } from "react-router-dom";

function TweetFeed({ tweet, author }) {
  const user = useSelector((state) => state.user);
  const formatDate = useFormattedDate(tweet.createdAt);
  const checkImg = useCheckImg(author.avatar);

  return (
    <div className="d-flex tweet p-3 border ">
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
      <div className="w-100">
        <Link to={`/users/${user.username}`} className="link-to underline">
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
              {tweet.likes.length > 0 ? (
                <div className="d-flex gap-1">
                  <img
                    src="/src/assets/twitter-icons/icons/like-active.svg"
                    className="like-icon"
                  />
                  <p className=" m-0">{tweet.likes.length} </p>
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
              src="/src/assets/twitter-icons/icons/delete.svg"
              className="d-flex justify-content-center align-items-end mx-4"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TweetFeed;
