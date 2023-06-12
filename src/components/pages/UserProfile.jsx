/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SidebarLeft from "../sidebars/SidebarLeft";
import SidebarRight from "../sidebars/SidebarRight";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "../feed/Tweet";
import axios from "axios";

import Header from "../userProfile/Header";
import { useParams } from "react-router-dom";
import { setTweetsState } from "../reducers/tweetSlice";

function UserProfile() {
  const tweets = useSelector((state) => state.tweets);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:3000/${params.username}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch(setTweetsState(res.data.tweets));
      setUserInfo(res.data);
    };
    getUserData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-3">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8 scrolleable">
          {userInfo && <Header user={userInfo}></Header>}
          {tweets.length &&
            tweets.map((tweet) => (
              <div key={tweet._id}>
                <Tweet tweet={tweet}></Tweet>
              </div>
            ))}
        </div>
        <div className="col-xxl-4 pt-3">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
