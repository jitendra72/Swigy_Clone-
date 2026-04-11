
import Category from "../Api/category.json";
import { useRef } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const ITEM_SCROLL = 152 * 4;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -ITEM_SCROLL,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: ITEM_SCROLL,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-8 border-b border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">
          What's on your mind?
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <GrFormPreviousLink className="text-2xl" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <GrFormNextLink className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
          className="flex gap-4 overflow-x-hidden select-none"
        >
          {Category.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${item.path}`)}
              className="w-28 text-center cursor-pointer group"
            >
              <div
                className="w-24 h-24 mx-auto rounded-full bg-white shadow-md
                          group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.path}
                  className="w-full h-full rounded-full object-cover pointer-events-none"
                />
              </div>

              <p className="mt-2 text-sm font-semibold text-gray-800 capitalize">
                {item.path.replace("-", " ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

