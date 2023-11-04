import { http } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface CreateEvent {
  id: number;
  name: string;
  description: string;
  status: "PENDING" | "ACTIVE" | "FINISH";
  discipline: number;
}

const FormCreateEvents = () => {
  const { register, handleSubmit } = useForm<CreateEvent>({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      status: "PENDING",
      discipline: 0,
    },
  });

  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: CreateEvent) => {
      return http.post("/challenge", data);
    },
    onSuccess: () => {
      router.push("/list-events");
    },
  });

  const onCreateEvent = (values: CreateEvent) => {
    mutate(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onCreateEvent)}
      action="POST"
      className="flex flex-col gap-4 w-[80%] max-w-lg mx-auto">
      <header>
        <h2 className="text-center text-primary text-[2rem] font-extrabold">
          Crea un evento
        </h2>
      </header>

      <div className="form-control w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Ingresa un nombre</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("name", {
            required: true,
          })}
        />
      </div>

      <div className="form-control w-ful">
        <label htmlFor="description" className="label">
          <span className="label-text">Ingresa una descripción</span>
        </label>
        <input
          id="description"
          type="text"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("description", {
            required: true,
          })}
        />
      </div>

      <button className="btn btn-primary">Crear evento</button>
    </form>
  );
};

export default FormCreateEvents;
