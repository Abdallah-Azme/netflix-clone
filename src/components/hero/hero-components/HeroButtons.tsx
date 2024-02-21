import MovieModal from "@/components/Category/MovieModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Movie } from "../../../../lib/types";

type HeroButtonsProps = {
  movie: Movie;
};

export default function HeroButtons({ movie }: HeroButtonsProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="px-6 py-6 mr-10">
          <PlayCircleOutlineIcon /> Play now
        </Button>
      </DialogTrigger>
      <DialogTrigger>
        <Button className="px-6 py-6">
          <InfoOutlinedIcon /> More info
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[500px] h-[500px] md:h-[750px] md:w-[750px]">
        <MovieModal movie={movie} />
      </DialogContent>
    </Dialog>
  );
}
