import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TrainerPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["trainerData"],
    queryFn: () => {
      return axios.get("/api/ai");
    },
  });

  return (
    <section className="flex flex-col h-full items-center">
      <Header />
      <div></div>
    </section>
  );
};

export default TrainerPage;
