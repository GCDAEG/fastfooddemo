import { Section } from "@/components/layout/Section";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import {
  Flower,
  Gavel,
  Globe,
  Globe2,
  GraduationCap,
  HandIcon,
  ParkingCircle,
  Users,
  Wifi,
} from "lucide-react";
import React from "react";
import { BsBank } from "react-icons/bs";
import { MdFreeBreakfast, MdPool } from "react-icons/md";

const lawServices = [
  {
    title: "Piscina al aire libre",
    icon: <MdPool className="size-full text-neutral-dark" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Desayuno casero incluido",
    icon: <MdFreeBreakfast className="size-full text-neutral-dark" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Wi-Fi de alta velocidad",
    icon: <Wifi className="size-full text-neutral-dark" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Estacionamiento privado",
    icon: <ParkingCircle className="size-full text-neutral-dark" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
] as const;

const ServiceSection = ({}) => {
  return (
    <Section id="services" height="screen">
      <div className="flex flex-col gap-12">
        <div className="w-full h-fit rounded-full flex flex-col gap-6 justify-center items-center ">
          <h2>Nuestros servicios</h2>
          <p>
            Todo lo que necesitás para una estadía cómoda y relajada junto al
            rio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mx-auto w-full flex-col items-center text-foreground bg-background">
          {lawServices.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-6 h-full px-4 py-5 relative rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 bg-card"
            >
              {/* Icono centrado arriba */}
              <div className="relative flex justify-center">
                {/* Aquí pondrías el icono correspondiente, ej con lucide-react */}
                {/* <Landmark className="w-16 h-16 text-amber-500" /> */}
                <div className="w-20 h-20 p-2 bg-neutral-light rounded-[80%] flex items-center justify-center  text-primary">
                  <div className="w-5/6 text-foreground">{service.icon}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className={`relative text-center flex flex-col gap-6`}>
                <h3 className={`leading-8`}>{service.title}</h3>
                <p className=" text-text-secondary leading-4 text-base ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full  flex flex-col items-center gap-6">
          <h4 className="text-lg md:text-2xl font-semibold">
            ¿Querés disfrutar de todo esto?
          </h4>
          <SimpleCTAButton className="w-fit px-8 py-4" />
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
