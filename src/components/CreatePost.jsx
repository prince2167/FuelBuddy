import { useUser } from "@clerk/clerk-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { usePosts } from "../context/post-context";

const CreatePost = () => {
  const { posts, setPosts } = usePosts();
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { user } = useUser();

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = description + emoji;
    setDescription(updatedContent);
    setShowEmojiPicker(false);
  };

  const postSubmitHandler = (event) => {
    event.preventDefault();

    const postData = {
      id: posts.length + 1,
      fullName: user.fullName,
      userName: user.username,
      url: selectedImage || null,
      avatar: user.imageUrl,
      description: description,
      comments: [],
      like: 0,
    };

    setPosts([postData, ...posts]);
    setDescription("");
    setSelectedImage(null);
  };

  const isPostButtonDisabled = description.trim() === "";

  return (
    <form
      className="w-full  border-gray-300 py-4 px-6 border rounded-lg shadow-lg h-full"
      onSubmit={postSubmitHandler}
    >
      <div className="flex gap-4">
        <img
          src={user?.imageUrl}
          alt={user?.fullName ? user.fullName.charAt(0) : ""}
          className="w-10 h-10 rounded-full"
        />
        <textarea
          placeholder="What's is in your mind?"
          className=" w-full h-28 border-none rounded-lg resize-none focus:outline-none"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>

      {selectedImage && (
        <div className="relative w-[12rem] mb-4">
          <img
            src={selectedImage}
            alt="Image"
            className="object-cover rounded-md h-full"
          />
          <button className="absolute top-1 right-1">
            <MdOutlineCancel size="24" onClick={() => setSelectedImage(null)} />
          </button>
        </div>
      )}

      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <BiImageAdd
            size="32"
            className="cursor-pointer"
            onClick={handleImageSelect}
          />

          <div className="relative">
            <BsEmojiSmile
              size="26"
              className="cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />

            {showEmojiPicker && (
              <div className="z-10 mt-2 absolute">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`bg-[#4f46e5] text-white font-semibold py-1 px-8 text-xl rounded-full, ${
            isPostButtonDisabled ? " opacity-60 cursor-not-allowed" : ""
          }`}
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
