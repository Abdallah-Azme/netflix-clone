"use client";
import React, { useCallback, useEffect, useState } from "react";
import { options } from "../../../lib/request";
import { Genre, Movie, Video } from "../../../lib/types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
type MovieModalProps = {
  movie: Movie;
};

export default function MovieModal({ movie }: MovieModalProps) {
  const [video, setVideo] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

  const getMovieDetails = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`,
        options
      );
      const movieDetails = await res.json();

      if (movieDetails?.videos) {
        const index = movieDetails.videos.results.findIndex(
          (video: Video) => video.type === "Trailer"
        );
        setVideo(movieDetails.videos.results[index].key);
      }

      if (movieDetails?.genres) {
        setGenres(movieDetails.genres);
      }
    } catch (error) {
      console.error(error);
    }
  }, [movie.id]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);
  return (
    <div className="fixed inset-0 z-30 bg-black/70 bg-opacity-95 w-full  max-w-2xl mx-auto overflow-hidden overflow-y-scroll scrollbar-hide rounded-xl">
      <iframe
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1`}
        className="top-14 left-0 w-full h-2/3"
        loading="lazy"
        allowFullScreen
      />
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <p className="  text-white/70">Name:</p>
            <p className="  text-white/70">{movie.title || movie.name}</p>
          </div>
          <div className="flex gap-3">
            <p className="">Add to list</p>
            <AddCircleIcon className="cursor-pointer text-rose-500  " />
          </div>
        </div>
        <div className="flex gap-2">
          <p className=" text-white/70 font-semibold">Release Date</p>
          <p className=" text-white/70 font-semibold">{movie?.release_date}</p>
        </div>
        <p className=" text-white font-semibold">{movie?.overview}</p>

        <div className="flex gap-2">
          <p className=" text-white/70 font-semibold">Rating</p>
          <p className=" text-white/70 font-semibold">{movie?.vote_average}</p>
        </div>

        <div className="flex gap-2">
          <p className=" text-white/70 font-semibold">Genrse</p>
          <p className=" text-white/70 font-semibold">
            {genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
