"use client";
import { Gavel, Waves } from "lucide-react";
import { Button } from "../ui/button";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { Separator } from "../ui/separator";
export function FooterSection() {
  const lenis = useLenis();
  return (
    <footer className="bg-neutral-dark text-neutral-light py-12 px-4 md:px-8 lg:px-40 border-t border-border flex flex-col gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna 1: Logo + descripción (marcado como pediste) */}
        <div className="flex flex-col gap-3 col-span-1">
          <div id="logo-placeholder" className="flex items-center gap-3 mb-4">
            {/* ← Aquí va tu logo */}
            <Waves className="size-6 " />
            <h4 className="text-3xl font-semibold tracking-tight">AGUAYRIO</h4>
            {/* Reemplaza lo de arriba con tu imagen/SVG real, por ejemplo:
            <img src="/logo-gym.png" alt="GYM Logo" className="h-12" />
            */}
          </div>

          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua endisse
            ultrices gravida lorem.
          </p>
        </div>

        {/* Columna 2: Useful links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-neutral text-xl font-semibold">
            Enlaces rápidos
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    lenis?.scrollTo(`#${section.id}`, {
                      offset: -96,
                      duration: 1.2,
                    });
                  }}
                  variant={"link"}
                  className="h-fit text-neutral-light"
                >
                  {section.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Support */}
        <div className="flex flex-col gap-3">
          <h4 className="text-neutral text-xl font-semibold">Contacto</h4>
          <ul className="flex flex-col gap-6 text-sm ">
            <li className="flex gap-2 items-center">
              <BsWhatsapp className="size-6" />
              <a href="#" className="hover:text-primary transition-colors">
                +54 9 345 1234567
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaLocationDot className="size-6" />
              <a href="#" className="hover:text-primary transition-colors">
                Entre Ríos, Argentina
              </a>
            </li>
            <li className="flex gap-5">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="size-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <BsInstagram className="size-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Sociales a la izquierda */}
      <Separator className="bg-neutral-light" />
      {/* Íconos sociales + línea */}
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright centrado/derecha */}
          <p className={`text-sm text-center md:text-right `}>
            Copyright ©2026 All rights reserved | This template is made with ♥
            by TUWEBHOY
          </p>
        </div>
      </div>
    </footer>
  );
}
