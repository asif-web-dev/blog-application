import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PostDetail({ posts, deletePost }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="p-6 text-center text-red-500 font-bold">
        Post not found.
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
      navigate("/");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl mt-6">
      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover rounded mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
        {post.title}
      </h1>

      {/* Meta info */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        By {post.author || "Anonymous"} • {post.createdAt}
      </p>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p className="text-gray-900 dark:text-white mt-2">{post.content}</p>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions (if author is logged in) */}
      {currentUser?.email === post.author && (
        <div className="space-x-4">
          <Link
            to={`/edit/${post.id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            ✏️ Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
