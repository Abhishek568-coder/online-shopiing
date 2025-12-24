function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full md:w-1/3"
    />
  );
}

export default SearchBar;