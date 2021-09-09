import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="mt-2 text-lg font-medium text-gray-600">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 mb-2 border-gray-500 border-2 outline-none w-full text-gray-600 focus:border-green-500"
            type="text"
          />
        </div>

        <button className=" bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 text-white mt-2  w-3/12 right">
          Submit
        </button>
      </form>
    </div>
  );
}
