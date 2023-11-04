import {useQuery} from "@tanstack/react-query"
import axios from "axios"
const TrainerPage = () => {

    const {data,isFetching} =useQuery({
        queryKey:["trainerData"],
        queryFn:()=>{
            return axios.get("/api/ai")
        }
    })
    
  return (
    <section className="flex flex-col h-full items-center">
      <header className="flex justify-between max-w-3xl w-full">
        {/* Logo */}
        {/* Trainer SVG */}
      </header>
      <div>

      </div>
    </section>
  );
};

export default TrainerPage;
