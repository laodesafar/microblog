import { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="mt-2  font-medium text-gray-600">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-4 py-2 mb-2 border-gray-500 border-2 outline-none w-full text-gray-600 focus:border-green-500"
            type="text"
          />
        </div>

        <button className=" bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 text-white mt-2   right">
          Submit
        </button>
      </form>
    </div>
  );
}
