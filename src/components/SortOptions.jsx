function SortOptions({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Sort By</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>
  );
}

export default SortOptions;