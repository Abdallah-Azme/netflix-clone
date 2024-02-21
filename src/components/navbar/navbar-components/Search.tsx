import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className=" w-auto relative hidden md:flex">
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="w-auto"
        placeholder="Search move..."
      />
      <Button disabled={!search}>
        <SearchIcon
          onClick={() => router.push(`/search/${search}`)}
          className="size-6 cursor-pointer hover:text-primary absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </Button>
    </div>
  );
}
