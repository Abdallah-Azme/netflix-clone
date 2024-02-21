import React from "react";
import { Movie } from "../../../lib/types";
import MovieCard from "./MovieCard";

type CategoryListProps = {
  title: string;
  move: Movie[];
};

export default function CategoryList({
  title,
  move: movies,
}: CategoryListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-3xl text-black">{title}</h1>
      <div className="overflow-x-hidden">
        <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
