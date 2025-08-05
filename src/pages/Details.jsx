import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiHeart, BiArrowBack } from "react-icons/bi";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const isTV = window.location.pathname.includes("/tv/");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const API_KEY = "1d88e762a21c6b2c8d482aa18255b905";
        const response = await axios.get(
          `https://api.themoviedb.org/3/${
            isTV ? "tv" : "movie"
          }/${id}?api_key=${API_KEY}`
        );
        console.log("API Response:", response.data);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, isTV]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!movie) {
    return <div className="text-center mt-10">Movie not found</div>;
  }

  const vote = Math.round(movie.vote_average * 10);
  let borderColor = "border-red-500";
  if (movie.vote_average >= 7) borderColor = "border-green-500";
  else if (movie.vote_average >= 5) borderColor = "border-yellow-500";

  return (
    <div className="min-h-screen overflow-hidden bg-black/80">
      {movie.backdrop_path && (
        <div className="fixed inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={isTV ? movie.name : movie.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          ></div>
        </div>
      )}

      <div className="relative min-h-screen py-4">
        <div className="container mx-auto px-4 h-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white mb-4 hover:text-yellow-400 transition-colors"
          >
            <BiArrowBack size={20} />
            <span className="text-base font-medium">Back</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="sticky top-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-xl shadow-xl w-full max-w-[300px] mx-auto"
                />
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-4xl font-bold text-white">
                    {isTV ? movie.name : movie.title}
                  </h1>
                  {movie.vote_average > 0 && (
                    <div
                      className={`bg-black bg-opacity-50 backdrop-blur-sm text-white font-bold rounded-full w-14 h-14 flex items-center justify-center border-3 ${borderColor}`}
                    >
                      {vote}
                      <span className="text-xs ml-0.5">%</span>
                    </div>
                  )}
                </div>

                {movie.tagline && (
                  <p className="italic text-xl text-gray-400 mt-2">
                    "{movie.tagline}"
                  </p>
                )}

                <p className="text-gray-300 text-base mt-4">
                  {isTV ? movie.first_air_date : movie.release_date}
                  {(isTV ? movie.number_of_seasons : movie.runtime) && (
                    <>
                      {" "}
                      •{" "}
                      {isTV
                        ? `${movie.number_of_seasons} Season${
                            movie.number_of_seasons !== 1 ? "s" : ""
                          }`
                        : `${movie.runtime} minutes`}
                    </>
                  )}
                </p>

                <div className="mt-6">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    Overview
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {movie.overview || "No overview available."}
                  </p>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    Genres
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-base transition-colors backdrop-blur-sm border border-white/10"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => console.log("Added to wishlist")}
                  className="mt-8 w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition font-bold text-base shadow-lg hover:shadow-yellow-400/25"
                >
                  <BiHeart size={24} />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
