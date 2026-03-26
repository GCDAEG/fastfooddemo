import React from "react";
import { Section } from "../Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  // Sustituye esta URL por la de tu ubicación real en Google Maps (Compartir > Insertar mapa)
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.009010765898!2d-58.383009062734985!3d-34.60393365439598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1774529675557!5m2!1ses-419!2sar";

  return (
    <Section id="location">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna de Información */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-lg text-muted-foreground">
                Te esperamos en el corazón de la ciudad, con fácil acceso a los
                principales puntos turísticos y transporte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-neutral-dark">
                    Dirección
                  </h4>
                  <p className="text-text-secondary">
                    Av. Principal 123, Barrio Norte, Ciudad Destino.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-neutral-dark">
                    Teléfono
                  </h4>
                  <p className="text-text-secondary">+54 11 1234-5678</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-secondary/50 rounded-xl border border-secondary/20">
              <p className="text-sm font-medium text-neutral-light italic">
                &quot;Ubicación privilegiada a solo 200 metros de la estación
                central de buses.&quot;
              </p>
            </div>
          </div>

          {/* Columna del Mapa */}
          <div className="w-full h-100 lg:h-[500] rounded-2xl overflow-hidden shadow-sm border-4 border-white">
            <iframe
              title="Ubicación del Hotel"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LocationSection;
