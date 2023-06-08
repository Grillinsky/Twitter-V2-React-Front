import { useEffect, useState } from "react";
import SidebarLeft from "../sidebars/SidebarLeft";
import SidebarRight from "../sidebars/SidebarRight";
import { useSelector } from "react-redux";
import Tweet from "../feed/Tweet";
import axios from "axios";

import Header from "../userProfile/Header";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState();
  const params = useParams();
  useEffect(() => {
    console.log(params);
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:3000/${params.username}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(res.data);
      console.log(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    if (userInfo) {
      setTweets(userInfo.tweets);
    }
  }, [userInfo]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-3">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8">
          {userInfo && <Header data={userInfo}></Header>}
          {tweets.map((tweet) => (
            <div key={tweet._id}>
              <Tweet data={tweet}></Tweet>
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
