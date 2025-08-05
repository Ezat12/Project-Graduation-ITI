import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="bg-gray-100 m-5 p-10 ">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to our movie app
        </h1>
        <p className="text-sm mb-10 opacity-90">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <div className="mx-auto">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movies, TV shows, people..."
              className="flex-grow px-3 py-2 bg-white rounded-lg focus:outline-none text-gray-800 "
            />
            <button
              type="submit"
              className="bg-[#FFE353] cursor-pointer text-black font-bold px-8 py-4 rounded-r-lg transition duration-300 text-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
