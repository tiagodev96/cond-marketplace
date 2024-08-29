"use client";

import { Package2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="w-full">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl"
          prefetch={false}
        >
          <Package2Icon className="h-6 w-6" />
          <span>Mercado Livre Adorato</span>
        </Link>
        <Button variant="outline" size="sm" className="bg-primary text-white">
          Login
        </Button>
      </header>
    </div>
  );
}
