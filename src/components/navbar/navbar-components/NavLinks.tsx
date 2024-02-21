import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "my-list",
    name: "My list",
  },
] as const;

export default function NavLinks() {
  return (
    <div>
      <Link
        href="/"
        className={cn(" font-extrabold cursor-pointer p-4 hover:text-primary")}
      >
        Home
      </Link>
      <Link
        href="/my-list"
        className={cn(" font-extrabold cursor-pointer p-4 hover:text-primary")}
      >
        My List
      </Link>
    </div>
  );
}
