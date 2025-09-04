import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CreatePost({ addpost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(""); // 🏷️ tags input (comma separated)
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert comma-separated string → array of tags
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
      tags: tagList, // ✅ include tags
      author: currentUser?.email,
      createdAt: new Date().toLocaleString(),
    };

    addpost(newPost);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Create New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Content */}
        <textarea
          placeholder="Write your content..."
          className="w-full p-2 border rounded h-40 dark:bg-gray-700 dark:text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Enter tags (comma separated, e.g. tech, coding, react)"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <img
            src={image}
            alt="preview"
            className="w-32 mt-2 rounded border"
          />
        )}

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
