import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-4xl font-semibold">
        Mohamed
        <span className="text-accent">.</span>
      </h1>
    </Link>
  );
}
