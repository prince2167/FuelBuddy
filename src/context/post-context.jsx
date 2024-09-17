import { createContext, useContext, useState } from "react";
import { data } from "../utils/data";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(data);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
