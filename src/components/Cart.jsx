function Cart({ cart, removeFromCart }) {
  return (
    <div className="bg-white p-3 rounded shadow text-sm max-h-[350px] overflow-y-auto">
      <h2 className="text-base font-semibold mb-2">
        Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-xs">Cart is empty</p>
      ) : (
        <ul className="space-y-1">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-1"
            >
              <span className="truncate w-32">
                {item.name}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs">₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-xs"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
