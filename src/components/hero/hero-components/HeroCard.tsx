import Image from "next/image";
import { baseImgUrl } from "../../../../lib/constants";
import { Movie } from "../../../../lib/types";

import Container from "@/components/commen/Container";
import HeroButtons from "./HeroButtons";
export default function HeroCard({ movie }: { movie: Movie }) {
  return (
    <>
      <div className="flex flex-col px-10 pt-20 gap-10 max-w-xl">
        <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
          <Image
            fill
            className="object-cover h-full w-full"
            alt="trending move Photo"
            src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
      </div>
      <Container className="flex flex-col gap-y-10 my-20">
        <h1 className="text-bold text-5xl text-white max-w-80">
          {movie?.title || movie.name}
        </h1>
        <p className="text-base text-white max-w-80">{movie?.overview}</p>
        <div className=" flex gap-3">
          <HeroButtons movie={movie} />
        </div>
      </Container>
    </>
  );
}
