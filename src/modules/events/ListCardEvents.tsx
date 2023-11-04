import CardEvent, { CardEventProps } from "@/modules/events/CardEvent";
import { http } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const ListCardEvents = () => {
  const { data: resp } = useQuery({
    queryKey: ["Events"],
    queryFn: () => {
      return http.get<CardEventProps[]>("/challenges");
    },
  });

  return (
    <section className="grid grid-cols-1 gap-4 w-[80%] max-w-4xl mx-auto justify-items-center md:grid-cols-2">
      {resp?.data.map((evento, index) => (
        <CardEvent key={index} {...evento} />
      ))}
    </section>
  );
};

export default ListCardEvents;
