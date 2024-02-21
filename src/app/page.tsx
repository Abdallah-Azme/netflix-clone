import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="text-secondary-foreground">
      <Navbar />
      <Hero />
    </div>
  );
}
