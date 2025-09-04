import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetails";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

const demoPosts = [
  {
    id: 1,
    title: "Getting Started with React 🚀",
    content:
      "React is a powerful JavaScript library for building user interfaces. Learn the basics of components, state, and props to kickstart your development journey.",
    image:
      "https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["react", "javascript", "frontend"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS 🎨",
    content:
      "Tailwind CSS makes styling faster with utility-first classes. Discover how to create responsive and modern designs effortlessly.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    tags: ["tailwind", "css", "design"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: "Firebase Authentication Made Easy 🔐",
    content:
      "Firebase provides simple and secure authentication. Learn how to integrate it into your React apps with email, Google, and more providers.",
    image:
"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
   tags: ["firebase", "auth", "backend"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 4,
    title: "The Future of JavaScript in 2025 ⚡",
    content:
      "JavaScript continues to evolve with new features like ES2025 proposals, improved performance, and better tooling. Let’s explore what’s next for the most popular programming language.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    tags: ["javascript", "future", "webdev"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 5,
    title: "UI/UX Design Principles Every Developer Should Know 🎨",
    content:
      "Good design is not just for designers. Learn essential UI/UX principles like contrast, hierarchy, and spacing to make your apps look professional.",
        image:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 tags: ["design", "ux", "frontend"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 6,
    title: "Productivity Tips for Developers ⏳",
    content:
      "Staying productive as a developer can be challenging. Here are proven tips and tools to manage your time, avoid burnout, and ship faster.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    tags: ["productivity", "developer", "lifestyle"],
    author: "admin@myblog.com",
    createdAt: new Date().toLocaleString(),
  },
  {
  id: 7,
  title: "Why TypeScript is Taking Over JavaScript Projects 🦾",
  content:
    "TypeScript adds strong typing to JavaScript, reducing bugs and improving developer productivity. Discover why more companies are adopting it in 2025.",
  image:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
  tags: ["typescript", "javascript", "webdev"],
  author: "admin@myblog.com",
  createdAt: new Date().toLocaleString(),
},
{
  id: 8,
  title: "The Rise of AI in Web Development 🤖",
  content:
    "From code generation to design assistance, AI is transforming how developers build apps. Let’s explore tools and trends shaping the future of AI-powered development.",
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  tags: ["ai", "future", "technology"],
  author: "admin@myblog.com",
  createdAt: new Date().toLocaleString(),
},
{
  id: 9,
  title: "Top VS Code Extensions for Developers 💻",
  content:
    "Visual Studio Code is the most popular editor, and extensions make it even more powerful. Here are must-have extensions for productivity, debugging, and design.",
  image:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  tags: ["vscode", "productivity", "tools"],
  author: "admin@myblog.com",
  createdAt: new Date().toLocaleString(),
},
];


const [posts, setPosts] = useState(() => {
  const saved = localStorage.getItem("posts");
  return saved ? JSON.parse(saved) : demoPosts; // 👈 fallback to demo posts
});


  // ✅ Sync posts across multiple tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "posts") {
        const updatedPosts = JSON.parse(e.newValue || "[]");
        setPosts(updatedPosts);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const addPost = (newPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const updatePost = (updatedPost) => {
    const updated = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const deletePost = (id) => {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreatePost addpost={addPost} />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditPost posts={posts} updatePost={updatePost} />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:id"
          element={<PostDetail posts={posts} deletePost={deletePost} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
