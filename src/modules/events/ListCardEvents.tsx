import CardEvent, { CardEventProps } from "@/modules/events/CardEvent";

const eventos: CardEventProps[] = [
  {
    name: "Entrenamiento de CrossFit",
    description: "Una sesión intensa de entrenamiento funcional.",
    date: "2023-11-05T10:00",
    place: "CrossFit Box",
  },
  {
    name: "Clase de Zumba",
    description: "¡Baila y quema calorías al ritmo de la música!",
    date: "2023-11-06T19:30",
    place: "Estudio de Baile XYZ",
  },
  {
    name: "Carrera de 5K",
    description: "Participa en esta carrera de 5 kilómetros.",
    date: "2023-11-07T08:00",
    place: "Parque Central",
  },
  {
    name: "Sesión de Yoga al Aire Libre",
    description: "Una clase de yoga para conectar con la naturaleza.",
    date: "2023-11-08T17:00",
    place: "Campo Verde",
  },
  {
    name: "Entrenamiento en Grupo",
    description: "Un entrenamiento en grupo para mejorar tu resistencia.",
    date: "2023-11-09T18:30",
    place: "Gimnasio Comunitario",
  },
  {
    name: "Ciclo Indoor Intenso",
    description: "Una sesión de ciclismo indoor para quemar calorías.",
    date: "2023-11-10T16:00",
    place: "Centro de Ciclismo",
  },
  {
    name: "Clase de Pilates",
    description: "Fortalece tu cuerpo y mente con esta clase de Pilates.",
    date: "2023-11-11T12:00",
    place: "Estudio de Pilates ABC",
  },
  {
    name: "Sesión de Entrenamiento Funcional",
    description: "Ejercicios variados para mejorar tu funcionalidad.",
    date: "2023-11-12T09:30",
    place: "Gimnasio Funcional",
  },
  {
    name: "Caminata en la Montaña",
    description: "Disfruta de una caminata en la naturaleza.",
    date: "2023-11-13T10:00",
    place: "Ruta de Senderismo XYZ",
  },
  {
    name: "Clase de Baile Latino",
    description: "Aprende a bailar ritmos latinos con energía y estilo.",
    date: "2023-11-14T20:00",
    place: "Salón de Baile Mambo",
  },
];

const ListCardEvents = () => {
  return (
    <section className="grid grid-cols-1 gap-4 w-[80%] max-w-4xl mx-auto justify-items-center md:grid-cols-2">
      {eventos.map((evento, index) => (
        <CardEvent key={index} {...evento} />
      ))}
    </section>
  );
};

export default ListCardEvents;
