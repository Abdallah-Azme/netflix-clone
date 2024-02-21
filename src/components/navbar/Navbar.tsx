"use client";

import Container from "../commen/Container";
import Logo from "./navbar-components/Logo";
import NavLinks from "./navbar-components/NavLinks";
import Search from "./navbar-components/Search";
import UserMenu from "./navbar-components/UserMenu";
export default function Navbar() {
  return (
    <div className=" bg-slate-100/80">
      <Container className="top-0 z-10 sticky flex items-center justify-between  ">
        <Logo />
        <NavLinks />
        <Search />
        <UserMenu />
      </Container>
    </div>
  );
}
