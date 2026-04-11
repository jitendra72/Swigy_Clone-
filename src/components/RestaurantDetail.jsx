

import { useParams } from "react-router-dom";
import restaurants from "../Api/restaurant.json";
import { useCart } from "./CartContext";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const item = restaurants.find((res) => res.id === id);

  if (!item) {
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        Restaurant not found
      </p>
    );
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      
      {/* MAIN CARD */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-[320px] h-[200px] md:h-[240px] object-cover rounded-2xl"
          />

          {/* DETAILS */}
          <div className="flex flex-col justify-between w-full md:h-[240px]">
            
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {item.title}
              </h1>

              <div className="flex items-center gap-3 mt-3 text-sm text-gray-600 flex-wrap">
                <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                  ★ {item.rating}
                </span>
                <span>
                  {item.minTime}-{item.maxTime} mins
                </span>
              </div>

              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                {item.name}
              </p>

              <p className="text-gray-400 text-sm">
                {item.place}
              </p>

              <p className="mt-3 font-semibold text-orange-600 text-sm sm:text-base">
                {item.offer}
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                addToCart({
                  ...item,
                  price: 199,
                })
              }
              className="mt-4 md:mt-0 self-start bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;