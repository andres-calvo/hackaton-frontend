import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import Header from "@/components/Header";
const TrainerPage = () => {
  const { data: resp, isFetching } = useQuery({
    queryKey: ["trainerData"],
    queryFn: () => {
      return axios.post("/api/ai");
    },
  });

  return (
    <section className="flex flex-col h-full items-center">
      <Header />
      {isFetching ? (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <ReactMarkdown>{resp?.data}</ReactMarkdown>
      )}
      <div></div>
    </section>
  );
};

export default TrainerPage;
