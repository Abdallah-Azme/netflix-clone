import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.png"
        width={65}
        height={65}
        alt="Logo for Rose Flex"
        className="rounded-full"
      />
    </Link>
  );
}
