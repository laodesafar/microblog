import { useState, useEffect } from "react";
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="w-1/3 mb-5 bg-gray-200 transition-shadow  shadow-md hover:shadow-sm"
        key={post.id}
      >
        <div className="p-2">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2 className="text-green-500 text-xl my-2">Post</h2>
      <div className="flex content-between space-x-2 ">{renderedPosts}</div>
    </div>
  );
}
