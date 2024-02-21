import React from "react";
import { Movie } from "../../../lib/types";
import Image from "next/image";
import { baseImgUrl } from "../../../lib/constants";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import MovieModal from "./MovieModal";

type MovieCardProps = {
  movie: Movie;
};

export default async function MovieCard({ movie }: MovieCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative h-24 min-w-48 sm:h-32 sm:min-w-60 md:h-36 md:min-w-72 cursor-pointer hover:outline-white">
          <Image
            alt="move poster"
            fill
            src={
              movie?.backdrop_path || movie?.poster_path
                ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
                : "/assets/no-image.jpg"
            }
            className=" w-full h-full rounded-lg "
          />
          <div className="absolute inset-0 rounded-lg border-4 border-transparent hover:border-white"></div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[500px] h-[500px] md:h-[750px] md:w-[750px]">
        <MovieModal movie={movie} />
      </DialogContent>
    </Dialog>
  );
}
