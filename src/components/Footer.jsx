import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            MyBlog
          </h2>
          <p className="text-sm">
            Share your thoughts, stories, and experiences with the world 🌍
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-blue-600 dark:hover:text-blue-400">
                ✍️ Create Post
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Connect
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                💻 GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                🐦 Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:example@email.com"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                📧 Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
