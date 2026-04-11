

import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Cart is empty
      </h2>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>Qty: {item.qty}</p>
              <p>₹{item.price}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

