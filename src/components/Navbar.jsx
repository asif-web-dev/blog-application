import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ darkMode, setDarkMode }) {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 md:px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl md:text-2xl font-bold text-gray-300 dark:text-gray-300">
        MyBlog
      </Link>

      <div className="flex items-center space-x-4 md:space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-blue-400 font-semibold"
              : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
          }
        >
          About
        </NavLink>

        {currentUser ? (
          <>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
              }
            >
              Create
            </NavLink>
            <span className="hidden md:inline text-gray-600 dark:text-gray-300">
              Hi, {currentUser.fullName || currentUser.displayName || currentUser.email}
            </span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              Login
            </NavLink>
            <NavLink to="/signup" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              Signup
            </NavLink>
          </>
        )}

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
