import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import { flattenDeep } from "../../hooks/flattenDeep";
import Header from "./Header";
import { shuffle } from "../../hooks/shuffle";

function Feed() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getTweets = async () => {
      const res = await axios.get("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setTweets(shuffle(flattenDeep(res.data)));
    };
    getTweets();
  }, []);

  return (
    <>
      <Header></Header>
      {tweets &&
        tweets.map((tweet, index) => (
          <div key={index}>
            <Tweet tweet={tweet}></Tweet>
          </div>
        ))}
    </>
  );
}

export default Feed;
