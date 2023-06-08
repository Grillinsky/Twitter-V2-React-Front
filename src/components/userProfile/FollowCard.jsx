/* eslint-disable react/prop-types */

import "./followCard.css";

function FollowCard({ data }) {
  return (
    <div className="row justify-content-between">
      <div className="col-sm-8">
        <div className="d-flex align-items-center">
          <img
            src={data.avatar}
            alt="User 1"
            className="rounded-circle avatar-pic me-4"
          />
          <div>
            <h3 className="fw-bold hUser mb-0">{data.username}</h3>
            <p className="pUser">{data.email}</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4 d-flex align-items-center justify-content-end">
        <a href="/removeFollower" className="following-button mt-2">
          Following
        </a>
      </div>
    </div>
  );
}

export default FollowCard;
