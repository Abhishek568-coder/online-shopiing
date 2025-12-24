function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg">

      {/* IMAGE */}
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h2 className="font-semibold text-base">{product.name}</h2>
        <p>₹ {product.price}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm">⭐ {product.rating}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-green-600 text-white py-1 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
