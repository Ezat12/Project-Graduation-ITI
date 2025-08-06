import React, { useState } from "react";
import SearchBar from "../components/Search bar/Searchbar";
import Movies from "../components/Movies/Movies";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home">
      <SearchBar onSearch={setSearchQuery} />
      <Movies searchQuery={searchQuery} />
    </div>
  );
}

export default Home;
