/* eslint-disable react/prop-types */

import Tweet from "../feed/Tweet";

function CommentsList({ tweets }) {
  return tweets.map((tweet, index) => (
    <div key={index}>
      <Tweet data={tweet}></Tweet>
    </div>
  ));
}

export default CommentsList;
