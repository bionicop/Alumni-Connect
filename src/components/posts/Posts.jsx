import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Share from "../../components/share/Share"

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      const filteredData = res.data.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      );
      return filteredData;
    })
  );

  return (
    <div className="posts">
      <Share className="share"/>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;