import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";
import logo from "../assets/images/Logo.png";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "politics",
    "sports",
    "environment",
    "health",
    "education",
    "entertainment",
  ];

  const handleSearchClick = () => {
    if (!showSearch) {
      setShowSearch(true);
      return;
    }

    if (query.trim() !== "") {
      onSearch(query);
      navigate("/");
      setQuery("");
      setShowSearch(false);
    }
  };

  const handleCategoryClick = (cat) => {
    onSearch(cat);
    navigate("/");
    setShowMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">


        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="NewsMagazine" className="h-8" />
          <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
            NewsMagazine
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/india"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600" : ""
              }`
            }
          >
            India
          </NavLink>

          <NavLink
            to="/world"
            className={({ isActive }) =>
              `hover:text-blue-600 transition ${
                isActive ? "text-blue-600" : ""
              }`
            }
          >
            World
          </NavLink>
        </nav>


        <div className="relative flex items-center gap-4">


          {showSearch && (
            <input
              type="text"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearchClick();
              }}
              className="border border-gray-300 px-3 py-1.5 text-sm rounded-md w-32 sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          )}


          <button
            onClick={handleSearchClick}
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <FiSearch />
            <span className="hidden sm:inline">Search</span>
          </button>


          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <FiMenu />
            <span className="hidden sm:inline">Genre</span>
          </button>

          {showMenu && (
            <div className="absolute right-0 top-12 bg-white border shadow-xl rounded-lg p-4 flex flex-col gap-3 text-sm z-50 w-44">
              {categories.map((cat) => (
                <span
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="cursor-pointer hover:text-blue-600 capitalize transition"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
