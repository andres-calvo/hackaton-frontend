import { MdDateRange, MdDescription, MdLocationOn } from "react-icons/md";

export interface CardEventProps {
  name: string;
  description: string;
  date: string;
  place: string;
}

const CardEvent = (props: CardEventProps) => {
  return (
    <article className="p-6 rounded-lg bg-white border-primary border-[1px] w-full max-w-sm flex flex-col gap-4 shadow-gray-900">
      <h3 className="text-primary font-bold text-[1.5rem]">{props.name}</h3>
      <div>
        <strong className="flex gap-1 items-center">
          <MdDescription />
          Descripción:
        </strong>
        <p>{props.description}</p>
      </div>
      <div>
        <strong className="flex gap-1 items-center">
          <MdDateRange />
          Fecha:
        </strong>
        <p>{props.date}</p>
      </div>
      <div>
        <strong className="flex gap-1 items-center">
          <MdLocationOn />
          Ubicación:
        </strong>
        <p>{props.place}</p>
      </div>
    </article>
  );
};

export default CardEvent;
