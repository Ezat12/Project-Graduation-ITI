import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/Movie Card/MovieCard";
import Pagination from "../components/Pagination/Pagination";

function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 500;

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "1d88e762a21c6b2c8d482aa18255b905";
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`
      );
      setTvShows(response.data.results);
    };

    fetchData();
  }, [page]);

  return (
    <div className="mx-5 my-2 p-10">
      <h2 className="text-2xl font-bold">Popular TV Shows</h2>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {tvShows.map((show) => (
          <MovieCard
            key={show.id}
            vote_average={show.vote_average}
            poster_path={show.poster_path}
            title={show.name}
            release_date={show.first_air_date}
            id={show.id}
            isTV={true}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
}

export default TvShows;
