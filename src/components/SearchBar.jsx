// src/components/SearchBar.jsx
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
