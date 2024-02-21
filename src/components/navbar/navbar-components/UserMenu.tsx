import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src="/assets/profile_icon.jpg"
          alt="Profile picture"
          width={70}
          height={70}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-auto ">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="my-list">My list</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/">Log out</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
