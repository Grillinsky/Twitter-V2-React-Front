import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweetsState } from "../reducers/tweetSlice";
import Tweet from "./Tweet";
import Header from "./Header";

function Feed() {
  const user = useSelector((state) => state.user);
  const tweetsState = useSelector((state) => state.tweets);
  const [tweets, setTweets] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      const res = await axios.get("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTweets(res.data);
      dispatch(setTweetsState(tweets));
    };
    getTweets();
  }, []);

  return (
    <>
      <Header></Header>
      {tweets &&
        tweets.map((tweet, index) => (
          <div key={index}>
            <Tweet tweet={tweet} />
          </div>
        ))}
    </>
  );
}

export default Feed;
