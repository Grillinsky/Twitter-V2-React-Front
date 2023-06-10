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

function UserFollowers() {
  const user = useSelector((state) => state.user);
  const [followers, setFollowers] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const params = useParams();

  useEffect(() => {
    const getUserData = async () => {
      console.log(params);
      const res = await axios.get(`http://localhost:3000/${params.username}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(res.data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getFollowers = async () => {
      const res = await axios.get(
        `http://localhost:3000/${params.username}/followings`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFollowers(res.data);
    };
    getFollowers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-3">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8 scrolleable">
          {userInfo && <Header data={userInfo}></Header>}
          {followers.map((follwer) => (
            <div className="container border p-3" key={follwer.id}>
              <FollowCard data={follwer}></FollowCard>
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

export default UserFollowers;
