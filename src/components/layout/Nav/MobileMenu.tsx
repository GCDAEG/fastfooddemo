"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaBars } from "react-icons/fa";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { Gavel, Waves } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HiBars2, HiBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const collapsible = useRef<HTMLDivElement | null>(null);

  const handleScroll = (id: string) => {
    lenis?.scrollTo(`#${id}`, { offset: -64, duration: 1.2 });
    setOpen(false);
  };

  // 👉 CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        collapsible.current &&
        !collapsible.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className="w-full h-16 md:px-6 lg:px-28 flex items-center justify-between md:hidden text-primary border-b bg-card"
      ref={collapsible}
    >
      <div className="flex w-full h-full justify-between px-4 items-center relative z-50 bg-card">
        <Link
          href="/"
          className="font-bold text-lg flex items-center gap-2 text-foreground"
        >
          <div className=" flex">
            <Waves className={`size-6 `} strokeWidth={2} />
          </div>
          <p className="text-2xl ">AGUAYRIO</p>
        </Link>

        <Button variant="ghost" onClick={() => setOpen((prev) => !prev)}>
          <HiBars3 className="size-8" />
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ y: { duration: 0.1, ease: "easeInOut" } }}
            className="absolute top-full w-full"
          >
            <ul className="flex flex-col px-4 py-6 gap-2 bg-primary text-primary-foreground w-full z-40 border-b border-border shadow-md">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-base h-14 text-left font-semibold",
                      activeSection === sec.id &&
                        "bg-accent text-accent-foreground",
                    )}
                    onClick={() => handleScroll(sec.id)}
                  >
                    {sec.label}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
