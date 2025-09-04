function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white dark:bg-gray-800 shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About This Blog</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to <span className="font-semibold">MyBlog</span>, a modern blogging platform built with React and Firebase Authentication.
        This project is designed to help developers practice React, routing, authentication, and state management.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        You can create, edit, and delete your own posts. Posts can include text and images, and are saved locally for now.  
        Future upgrades can add comments, categories, likes, and deployment to a real backend. 🚀
      </p>
    </div>
  );
}

export default About;
