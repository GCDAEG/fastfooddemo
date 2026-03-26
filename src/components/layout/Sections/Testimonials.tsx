"use client";

import { Section } from "@/components/layout/Section";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";
import Image from "next/image";
import { Quote } from "lucide-react";

// Import del Carousel de shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PiQuotesFill } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";

type Testimonial = {
  id: number;
  comment: string;
  name: string;
  username?: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    comment:
      "La cabaña superó todas nuestras expectativas. El lugar es mágico, la atención impecable y las vistas al río son increíbles. Volveremos sin duda.",
    name: "María López",
    username: "@marialopez",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: 2,
    comment:
      "Un paraíso escondido. La piscina, el jardín y la tranquilidad que se respira hacen que sea el lugar ideal para desconectar. Todo perfecto.",
    name: "Carlos Rodríguez",
    username: "@carlosr",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    id: 3,
    comment:
      "Nos sentimos como en casa. La cabaña es hermosa, muy limpia y con todos los detalles. El desayuno casero estaba delicioso. Recomendado 100%.",
    name: "Laura Fernández",
    username: "@laurafer",
    avatar: "https://i.pravatar.cc/150?u=laura",
  },
  {
    id: 4,
    comment:
      "El mejor fin de semana en familia que hemos tenido. Los niños disfrutaron muchísimo del jardín y la piscina. El lugar transmite mucha paz.",
    name: "Diego Morales",
    username: "@diegomorales",
    avatar: "https://i.pravatar.cc/150?u=diego",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" height="content" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        {/* Título y descripción */}
        <div className="text-center ">
          <FadeIn>
            <h2 className="text-4xl md:text-[36px] font-bold tracking-tight">
              Reseñas de nuestros huéspedes
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-base md:text-[16px] text-foreground/70 max-w-2xl mx-auto">
              Lo que realmente piensan quienes ya se quedaron con nosotros.
            </p>
          </FadeIn>
        </div>

        {/* Carousel de reseñas */}
        <StaggerContainer>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-full md:basis-1/2"
                >
                  <FadeIn delay={index * 0.1}>
                    <div className="bg-card px-4 py-5 rounded-3xl h-full flex flex-col shadow-sm hover:shadow-md gap-6">
                      {/* Comillas */}
                      <PiQuotesFill className="size-10 text-text-primary" />

                      {/* Comentario */}
                      <p className="text-lg leading-relaxed text-foreground/90 grow">
                        {testimonial.comment}
                      </p>

                      {/* Separator */}
                      <Separator className="bg-muted" />

                      {/* Usuario */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0">
                          {/* <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover border border-border"
                            sizes="48px"
                          /> */}
                          <div className="bg-green-500 size-12 rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          {testimonial.username && (
                            <p className="text-sm text-foreground/60">
                              {testimonial.username}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación */}
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </StaggerContainer>
      </div>
    </Section>
  );
};

export default Testimonials;
