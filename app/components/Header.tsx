import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header border-b border-[#33353F] text-white p-4">
      <div className="container flex justify-between">
        <span>Your LOGO</span>
        <nav>
          <Link href="/" className="px-2">Home</Link>
          <Link href="/pages/about" className="px-2">About</Link>
          <Link href="/pages/contact" className="px-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
