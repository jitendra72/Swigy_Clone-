import onFoodDelevery from "../Api/restaurant.json";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const OnlineFoodDelivery = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="max-w-[1140px] mx-auto px-4 mt-6">
      <h1 className="text-2xl font-bold mb-4">
        Restaurants with online food delivery in Delhi
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {onFoodDelevery.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/restaurant/${item.id}`)}
            className="cursor-pointer w-[270px] rounded-2xl bg-white shadow hover:scale-[0.97] transition duration-200"
          >
            <div className="relative h-[150px] rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover"
              />

              {item.offer && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded">
                  {item.offer}
                </div>
              )}
            </div>

            <div className="p-3">
              <h3 className="font-bold text-lg truncate">{item.title}</h3>

              <div className="flex items-center gap-2 mt-1 text-sm">
                <span className="bg-green-600 text-white px-2 py-[2px] rounded text-xs">
                  ★ {item.rating}
                </span>
                <span className="text-gray-600">
                  {item.minTime}-{item.maxTime} mins
                </span>
              </div>

              <p className="text-gray-500 text-sm truncate mt-1">{item.name}</p>

              <p className="text-gray-400 text-sm">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineFoodDelivery;
