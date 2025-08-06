import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../Movie Card/MovieCard";
import Pagination from "../Pagination/Pagination";

function Movies({ searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const totalPages = 500;

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "1d88e762a21c6b2c8d482aa18255b905";
      const baseUrl = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

      const response = await axios.get(baseUrl);
      setMovies(response.data.results);
    };

    fetchData();
  }, [page, searchQuery]);
  return (
    <div className="mx-5 my-2 p-10">
      <h2 className="text-2xl font-bold ">
        {searchQuery ? `Search results for "${searchQuery}"` : "Now Playing"}
      </h2>

      <div className="grid grid-cols-6 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
            title={movie.original_title}
            release_date={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
}

export default Movies;
