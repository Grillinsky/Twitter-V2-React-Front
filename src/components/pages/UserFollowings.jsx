import { useEffect, useState } from "react";
import SidebarLeft from "../sidebars/SidebarLeft";
import SidebarRight from "../sidebars/SidebarRight";
import { useSelector } from "react-redux";
import Tweet from "../feed/Tweet";
import axios from "axios";
import { flattenDeep } from "../../hooks/flattenDeep";
import { useCheckImg } from "../../hooks/useCheckImg";
import { useParams } from "react-router-dom";
import Header from "../userProfile/Header";
import FollowCard from "../userProfile/followCard";

function UserFollowings() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState();
  const [followings, setFollowings] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:3000/${params.username}`, {
        data: { username: user.username },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getFollowings = async () => {
      const res = await axios.get(
        `http://localhost:3000/${params.username}/followings`,
        {
          data: { username: user.username },
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFollowings(res.data);
      console.log(res.data);
    };
    getFollowings();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-3">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8 scrolleable">
          {userInfo && <Header user={userInfo}></Header>}
          {followings.map((following) => (
            <div className="container border p-3" key={following.id}>
              <FollowCard data={following}></FollowCard>
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

export default UserFollowings;
