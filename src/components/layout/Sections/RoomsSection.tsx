import React from "react";
import { Section } from "../Section";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { SimpleCTAButton } from "@/components/ui/CTAButton";

interface RoomsSectionProps {}

const stats = [
  {
    id: 0,
    src: "/habitaciondoble.png",
    number: "12.500",
    suffix: "$",
    title: "Habitación doble",
    description:
      "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
    people: 2,
  },
  {
    id: 1,
    src: "/habitacionfamiliar.png",
    number: "24.500",
    suffix: "$",
    title: "Habitación familiar",
    description:
      "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
    people: 5,
  },
  {
    id: 2,
    src: "/habitacionmatrimonial.png",
    number: "10.500",
    suffix: "$",
    title: "Habitación matrimonial",
    description:
      "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
    people: 2,
  },
  {
    id: 3,
    src: "/habitaciondoble.png",
    number: "11.000",
    suffix: "$",
    title: "Habitación doble",
    description:
      "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
    people: 2,
  },
];

const RoomsSection: React.FC<RoomsSectionProps> = ({}) => {
  return (
    <Section height="content" id="rooms" className="bg-background">
      <div className="w-full text-center items-center flex flex-col gap-12">
        <div className="flex flex-col w-full items-center justify-center text-center gap-5">
          <h2>Nuestras habitaciones</h2>
          <p className="text-lg text-[--muted-foreground]">
            Cabañas y habitaciones cómodas con vista al río, ideales para
            descansar en familia o pareja.
          </p>
        </div>

        {/* CONTENEDOR MASONRY */}
        <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {stats.map((room) => (
            <div
              key={room.id}
              className="break-inside-avoid flex flex-col gap-4 rounded-md bg-card shadow-md overflow-hidden"
            >
              {/* Quitamos aspect-square para que la imagen mantenga su proporción o varianza */}
              <div className="relative w-full h-auto">
                <Image
                  src={room.src}
                  alt={room.title}
                  className="object-cover w-full h-auto"
                  width={500} // Valores de referencia
                  height={300}
                />
              </div>
              <div className="flex flex-col gap-4 px-3 pb-5 justify-evenly">
                <h3 className="text-start font-semibold tracking-tight">
                  {room.title}
                </h3>
                <p className="text-start leading-4 text-neutral-dark">
                  {room.description}
                </p>
                <div className="flex w-full justify-between items-end">
                  <div className="flex items-end">
                    <p className="text-2xl text-secondary font-semibold">
                      {room.suffix}
                      {room.number}
                    </p>
                    <span className="text-text-secondary ml-1">/noche</span>
                  </div>
                  <span className="text-text-secondary">
                    {room.people} personas
                  </span>
                </div>
                <SimpleCTAButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RoomsSection;
