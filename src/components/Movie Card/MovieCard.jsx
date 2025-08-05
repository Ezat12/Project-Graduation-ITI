import React from "react";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router";

function MovieCard({ vote_average, poster_path, title, release_date, id }) {
  const vote = Math.round(vote_average * 10);

  let borderColor = "border-red-500";
  if (vote_average >= 7) borderColor = "border-green-500";
  else if (vote_average >= 5) borderColor = "border-yellow-500";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative group">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="The Good Doctor"
          className="h-60 w-full object-cover"
        />
      </Link>

      <div
        className={`absolute top-2 left-2 bg-black text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-4 ${borderColor}`}
      >
        {vote}
        <span className="text-[8px]">%</span>
      </div>

      <div className="absolute top-2 right-2 text-white text-lg opacity-80">
        ...
      </div>

      <div className="p-2">
        <h3 className="text-sm font-bold leading-4">{title}</h3>
        <p className="text-xs text-gray-500">{release_date}</p>
      </div>

      <div
        onClick={() => console.log("Liked")}
        className="absolute bottom-2 right-2 cursor-pointer text-gray-400 hover:text-yellow-500 transition"
      >
        <BiHeart size={25} />
      </div>
    </div>
  );
}

export default MovieCard;
