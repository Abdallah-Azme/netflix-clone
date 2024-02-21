import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import { fetchGenreMovie } from "../../action/moveData";
import { Genre } from "../../lib/types";
import CategoryList from "@/components/Category/CategoryList";

export default async function Home() {
  const genres = await fetchGenreMovie();
  const example = genres.slice(0, 2);
  return (
    <div className="text-secondary-foreground">
      <Navbar />
      <Hero />
      <div className="">
        {example.map((genre: Genre) => (
          <CategoryList key={genre.id} title={genre.name} move={genre.move} />
        ))}
      </div>
    </div>
  );
}
