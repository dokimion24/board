"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;

export default function DesktopNavbar({ children }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrollDown = scrollPosition > 10;

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        {
          "bg-white text-gray-700 shadow-md": !isScrollDown,
          "bg-gray-50": isScrollDown,
        },
        "text-gray-700 shadow-md"
      )}
    >
      <div className="flex items-center px-4 py-4 container">{children}</div>
    </nav>
  );
}
