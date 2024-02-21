import React from "react";
import { searchMovis } from "../../../action/moveData";
import MovieCard from "../Category/MovieCard";
import { Movie } from "../../../lib/types";

type SearchResultsProps = {
  search: string;
};

export default async function SearchResults({ search }: SearchResultsProps) {
  const searchMovies = (await searchMovis(search)) || [];
  return searchMovies.length === 0 ? (
    <div className="flex flex-col py-16 px-10">
      <div className="text-white font-bold">
        <h1>No results found</h1>
      </div>
    </div>
  ) : (
    <div className="flex flex-col py-16 px-10">
      <h1 className="font-bold text-white ">Results for {search}</h1>
      <div className="flex items-center justify-center gap-6 lg:gap-10 flex-wrap px-3 sm:px-6 md:px-10 py-20">
        {searchMovies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
