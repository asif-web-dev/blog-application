import { Link } from "react-router-dom";
import { useState } from "react";

function Home({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Collect unique tags from all posts
  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))];

  // Filter posts by search + tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen">
      {/* 🌟 Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to MyBlog
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Share your thoughts, stories, and experiences with the world 🌍
          </p>
          <Link
            to="/create"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
          >
            ✍️ Create a Post
          </Link>
        </div>
      </section>

      {/* 📝 Posts Section */}
      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Latest Posts
        </h2>

        {/* 🔍 Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full md:w-1/2 p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* 🏷️ Tag Filter */}
        {allTags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded ${
                selectedTag === ""
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTag("")}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {(!filteredPosts || filteredPosts.length === 0) ? (
          <p className="text-gray-600 dark:text-gray-300">
            No posts found.{" "}
            <Link to="/create" className="text-blue-600 dark:text-blue-400">
              Create one
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-lg"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded mb-4 w-full h-40 object-cover"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">
                  {post.content}
                </p>

                {/* 🏷️ Tags Display */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/post/${post.id}`}
                  className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
