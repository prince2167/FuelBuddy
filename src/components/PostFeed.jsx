import { usePosts } from "../context/post-context";
import { data } from "../utils/data";
import { PostCard } from "./PostCard";

export const PostFeed = () => {
  const { posts } = usePosts();
  return (
    <div className="mt-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
