import React from "react";
import { fetchTrending } from "../../../action/moveData";
import HeroCard from "./hero-components/HeroCard";

export default async function Hero() {
  const trending = await fetchTrending();
  const randomNumber = Math.floor(Math.random() * trending.length);
  const randomTrendingMovie = trending[randomNumber];
  return (
    <div>
      <HeroCard movie={randomTrendingMovie} />
    </div>
  );
}
