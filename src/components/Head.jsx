

import { FiChevronDown, FiSearch, FiShoppingCart } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpOutline, IoPeopleOutline } from "react-icons/io5";
import { LiaAcquisitionsIncorporated } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useState } from "react";

const Head = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/category/${searchText}`);
      setShowSearch(false);
      setSearchText("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      
      {/* NAVBAR */}
      <div className="w-full md:max-w-[980px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LEFT */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer flex-1 min-w-0"
        >
          <img src="swiggy.jpeg" alt="Swiggy" className="w-8 h-8 shrink-0" />

          <div className="hidden sm:flex items-center gap-1 text-sm truncate">
            <span className="font-bold border-b border-black truncate">
              Others
            </span>
            <FiChevronDown className="text-orange-500 shrink-0" />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 shrink-0">
          
          <div className="flex items-center gap-2 cursor-pointer">
            <LiaAcquisitionsIncorporated />
            Corporate
          </div>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center gap-2"
          >
            <FiSearch />
            Search
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <BiSolidOffer />
            Offers
          </div>

          <div
            onClick={() => navigate("/help")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <IoHelpOutline />
            Help
          </div>

          <div
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <IoPeopleOutline />
            Sign In
          </div>

          <button onClick={() => navigate("/cart")} className="relative">
            <FiShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center gap-4 shrink-0">
          
          <button onClick={() => setShowSearch(!showSearch)}>
            <FiSearch size={18} />
          </button>

          <button onClick={() => navigate("/cart")} className="relative">
            <FiShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>

      {/* ✅ SEARCH BAR (FIXED - NO OVERLAP ISSUE) */}
      {showSearch && (
        <div className="w-full md:max-w-[980px] mx-auto px-4 pb-3">
          <input
            type="text"
            placeholder="Search food or restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full border px-4 py-2 rounded-md text-sm outline-none"
          />
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-3 text-sm text-gray-700">
          
          <div className="flex items-center gap-2">
            <LiaAcquisitionsIncorporated />
            Corporate
          </div>

          <div className="flex items-center gap-2">
            <BiSolidOffer />
            Offers
          </div>

          <div
            onClick={() => navigate("/help")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <IoHelpOutline />
            Help
          </div>

          <div
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <IoPeopleOutline />
            Sign In
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;