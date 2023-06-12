/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { useCheckImg } from "../../hooks/useCheckImg";
import "./followCard.css";
import { toggleFollow } from "../reducers/userSlice";
import axios from "axios";

function FollowCard({ user }) {
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const checkImg = useCheckImg(user.avatar);

  const handlerFollow = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
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
  return (
    <div className="row justify-content-between">
      <div className="col-sm-8">
        <div className="d-flex align-items-center">
          <img
            src={
              checkImg
                ? checkImg
                : "/src/assets/twitter-icons/icons/default_profile_400x400.png"
            }
            className="rounded-circle avatar-pic me-4"
            alt="Profile Image" // Agrega accesibilidad
          />
          <div>
            <h3 className="fw-bold hUser mb-0">{user.username}</h3>
            <p className="pUser">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4 d-flex align-items-center justify-content-end">
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
    </div>
  );
}

export default FollowCard;
