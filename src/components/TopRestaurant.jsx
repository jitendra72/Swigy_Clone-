import { useRef } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Restaurant from "../Api/restaurant.json";

const TopRestaurant = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const CARD_SCROLL = 240 * 4;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -CARD_SCROLL,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: CARD_SCROLL,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1140px] mx-auto px-6 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Top restaurant chains in Delhi
        </h2>

        <div className="flex gap-2">
          <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-100">
            <GrFormPreviousLink className="text-2xl" />
          </button>

          <button onClick={scrollRight} className="p-2 rounded-full bg-gray-100">
            <GrFormNextLink className="text-2xl" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="flex gap-4 overflow-x-hidden">
        {Restaurant.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/restaurant/${item.id}`)}
            className="min-w-[240px] cursor-pointer"
          >
            <div className="relative h-[150px] rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded">
                {item.offer?.toUpperCase()}
              </div>
            </div>

            <div className="mt-2 space-y-[2px]">
              <h3 className="font-bold text-base truncate">{item.title}</h3>

              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>{item.rating}</span>
                <span className="text-gray-500">
                  • {item.minTime}-{item.maxTime} mins
                </span>
              </div>

              <p className="text-sm text-gray-500 truncate">{item.name}</p>
              <p className="text-sm text-gray-500">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurant;
