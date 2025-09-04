import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function EditPost({ posts, updatePost }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const post = posts.find((p) => p.id.toString() === id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(""); // 🏷️ tags input (comma separated)

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image || null);
      setTags(post.tags ? post.tags.join(", ") : ""); // show existing tags as comma list
    }
  }, [post]);

  if (!post) {
    return <p className="p-6 text-red-500 font-semibold">Post not found.</p>;
  }

  if (currentUser?.email !== post.author) {
    return (
      <p className="p-6 text-red-500 font-semibold">
        You are not allowed to edit this post.
      </p>
    );
  }

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

    const updatedPost = {
      ...post,
      title,
      content,
      image,
      tags: tagList, // ✅ updated tags
    };

    updatePost(updatedPost);
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Edit Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content */}
        <textarea
          placeholder="Update your content..."
          className="w-full p-2 border rounded h-40 dark:bg-gray-700 dark:text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Update tags (comma separated)"
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
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
