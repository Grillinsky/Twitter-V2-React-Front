import { useSelector } from "react-redux";
import SidebarLeft from "../sidebars/SidebarLeft";
import SidebarRight from "../sidebars/SidebarRight";
import { useEffect, useState } from "react";
import axios from "axios";
import TweetFeed from "../tweet/tweetFeed";
import Header from "../feed/Header";
import { useParams } from "react-router-dom";

function Tweet() {
  const [tweet, setTweet] = useState([]);
  const user = useSelector((state) => state.user);
  const params = useParams();
  const [author, setAuthor] = useState();
  useEffect(() => {
    const getTweet = async () => {
      const res = await axios.get(
        `http://localhost:3000/tweets/${params.tweetId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setTweet(res.data);
      setAuthor(res.data.author);
    };
    getTweet();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-2">
          <SidebarLeft user={user}></SidebarLeft>
        </div>
        <div className="col-xxl-6 col-8 scrolleable">
          {tweet && author && (
            <TweetFeed tweet={tweet} author={author}></TweetFeed>
          )}
          <Header></Header>
        </div>
        <div className="col-xxl-4 d-xl-none d-xxl-block pt-3">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
