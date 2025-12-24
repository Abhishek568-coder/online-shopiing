function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="All">All</option>
      <option value="Mobile">Mobile</option>
      <option value="Laptop">Laptop</option>
      <option value="Accessories">Accessories</option>
    </select>
  );
}

export default CategoryFilter;