
import { useParams } from "react-router-dom";
import categoryData from "../Api/category.json";
import { useCart } from "./CartContext";
import { FaStar } from "react-icons/fa";

const CategoryPage = () => {
  const { path } = useParams();
  const { addToCart } = useCart();

  const filteredRestaurants = categoryData.filter((item) =>
    item.name.toLowerCase().includes(path.toLowerCase())
  );

  if (filteredRestaurants.length === 0) {
    return (
      <h2 className="text-center mt-20 text-lg text-gray-500 px-4">
        No restaurants found for "{path}"
      </h2>
    );
  }

  return (
    <div className="flex flex-col items-center mt-8 gap-5 px-3">
      
      <h1 className="text-lg sm:text-xl font-bold capitalize mb-3 text-center">
        {path} Restaurants
      </h1>

      {filteredRestaurants.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-2xl flex flex-col md:flex-row bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
        >
          
          {/* IMAGE */}
          <div className="w-full md:w-[240px] h-36 md:h-auto relative shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
              <FaStar size={10} /> 4.3
            </span>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between p-3 sm:p-4 flex-1">
            
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 capitalize mt-1">
                {item.name}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Fast Delivery • Pure Veg • ₹200 for one
              </p>
            </div>

            {/* PRICE + BUTTON */}
            <div className="flex items-center justify-between mt-3">
              
              <span className="text-base sm:text-lg font-bold text-gray-800">
                ₹{item.price || 199}
              </span>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price || 199,
                  })
                }
                className="border border-orange-500 text-orange-500 px-3 sm:px-4 py-1.5 text-sm rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;