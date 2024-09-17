import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

// Single Comment Component
const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  const { user } = useUser();

  const handleReplySubmit = (event) => {
    event.preventDefault();
    if (replyText.trim() === "") return;

    const reply = {
      id: comment.replies.length + 1,
      name: user?.fullName,
      userName: user?.username,
      avatar: user.imageUrl,
      comment: replyText,
      replies: [],
    };

    addReply(comment.id, reply);
    setReplyText("");
    setShowReply(false);
  };

  return (
    <div className="mb-4 ml-6">
      <div className="flex items-start space-x-4">
        <img
          className="w-8 h-8 rounded-full"
          src={comment.avatar}
          alt={comment.name}
        />
        <div>
          <h4 className="font-bold">{comment.name}</h4>
          <p className="text-sm text-gray-500">@{comment.userName}</p>
          <p className="mt-1">{comment.comment}</p>

          {/* Reply Button */}
          <button
            onClick={() => setShowReply(!showReply)}
            className="text-sm text-blue-500 mt-2"
          >
            {showReply ? "Cancel" : "Reply"}
          </button>

          {/* Reply Input */}
          {showReply && (
            <form className="mt-2" onSubmit={handleReplySubmit}>
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Post Reply
              </button>
            </form>
          )}

          {/* Render Nested Replies */}
          {comment.replies.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-gray-200">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} addReply={addReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// PostCard Component
export const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);
  const { user } = useUser();

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  // Add a new comment
  const handleAddComment = (event) => {
    event.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObject = {
      id: comments.length + 1,
      name: user.fullName,
      userName: user.username,
      avatar: user.imageUrl || "https://via.placeholder.com/150",
      comment: newComment,
      replies: [],
    };

    setComments([...comments, newCommentObject]);
    setNewComment("");
  };

  // Add a reply to a comment
  const handleAddReply = (commentId, reply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg h-auto w-sm mt-6">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={post.avatar}
          alt={post.fullName}
        />
        <div>
          <h4 className="font-bold">{post.fullName}</h4>
          <p className="text-sm text-gray-500">@{post.userName}</p>
        </div>
      </div>
      <p className="mt-4">{post.description}</p>
      <img src={post.url} alt="" className="w-sm h-auto mt-2" />

      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="mt-2 text-gray-500">
            {likes} {likes === 1 ? "Like" : "Likes"}
          </div>

          <button
            onClick={handleLike}
            className={`mt-2 px-4 py-2 rounded-lg ${
              isLiked ? "bg-[#4f46e5] text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {isLiked ? "Unlike" : "Like"}
          </button>
        </div>

        <button
          className="mt-2 px-4 py-2 rounded-lg bg-gray-200"
          onClick={() => setShowComment(!showComment)}
        >
          Comment
        </button>
      </div>

      {/* Comment Section */}
      {showComment && (
        <div className="mt-4">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              addReply={handleAddReply}
            />
          ))}

          <form className="mt-4" onSubmit={handleAddComment}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Post Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
