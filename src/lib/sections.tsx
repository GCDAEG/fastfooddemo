export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  { id: "hero", label: "Inicio" },
  { id: "rooms", label: "Habitaciones" },
  {
    id: "services",
    label: "Servicios",
  },
  {
    id: "gallery",
    label: "Galeria",
  },
  { id: "location", label: "Ubicacion" },
];
