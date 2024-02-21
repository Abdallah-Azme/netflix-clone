import SearchResults from "@/components/commen/SearchResults";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
type SearchProps = {
  params: {
    query: string;
  };
};
export default function page({ params }: SearchProps) {
  const search = params.query;
  return (
    <div>
      <SearchResults search={search} />
    </div>
  );
}
