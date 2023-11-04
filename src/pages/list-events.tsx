import Footer from "@/components/Footer";
import ListCardEvents from "@/modules/events/ListCardEvents";

const ListEvents = () => {
  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-[2rem] text-primary font-bold text-center my-[1rem]">
        Lista de eventos
      </h1>
      <ListCardEvents />
      <Footer />
    </section>
  );
};

export default ListEvents;
