import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { Gavel, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLenis } from "lenis/react";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
}) => {
  const lenis = useLenis();
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div
      className={cn(
        "w-full mx-auto h-full px-4 md:px-8 lg:px-40 hidden items-center justify-between md:flex absolute z-50 text-foreground",
      )}
    >
      {/* Logo */}
      <Link href="/" className={`font-bold text-lg flex items-center gap-3`}>
        <div className=" flex">
          <Waves className={`size-6 `} strokeWidth={2} />
        </div>
        <p className="text-2xl ">AGUAYRIO</p>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-6">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo(`#${s.id}`, {
                  offset: -64,
                  duration: 1.2,
                });
              }}
              className={cn(
                "text-base text-text-primary font-semibold transition-colors hover:text-primary",
                activeSection === s.id && "text-primary border-b",
              )}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;
