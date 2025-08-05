import React from "react";
import SearchBar from "../components/Search bar/Searchbar";
import Movies from "../components/Movies/Movies";

function Home() {
  return (
    <div className="home">
      <SearchBar />
      <Movies />
    </div>
  );
}

export default Home;
