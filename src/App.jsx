import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortOptions from "./components/SortOptions";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import productsData from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const removeFromCart = (index) => {
  const updatedCart = cart.filter((_, i) => i !== index);
  setCart(updatedCart);
};

  let filteredProducts = productsData
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "All" ? true : item.category === category
    );

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4 p-5 justify-center">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter category={category} setCategory={setCategory} />
        <SortOptions sort={sort} setSort={setSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        {/* Products */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />
          ))}
        </div>

       {/* Cart */}
<Cart cart={cart} removeFromCart={removeFromCart} />

      </div>
    </div>
  );
}

export default App;
