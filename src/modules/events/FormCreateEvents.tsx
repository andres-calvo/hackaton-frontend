import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface CreateEvent {
  name: string;
  description: string;
  date: string;
  place: string;
}

const FormCreateEvents = () => {
  const { register, handleSubmit } = useForm<CreateEvent>({
    mode: "onChange",
    defaultValues: {
      date: "",
      description: "",
      name: "",
      place: "",
    },
  });

  const router = useRouter();

  const onCreateEvent = (values: CreateEvent) => {
    console.log(values);

    // router.push("/events");
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

      <div className="form-control w-full">
        <label htmlFor="date" className="label">
          <span className="label-text">Ingresa una fecha</span>
        </label>
        <input
          id="date"
          type="date"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("date", {
            required: true,
          })}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="place" className="label">
          <span className="label-text">Ingresa un lugar</span>
        </label>
        <input
          id="place"
          type="text"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("place", {
            required: true,
          })}
        />
      </div>

      <button className="btn btn-primary">Crear evento</button>
    </form>
  );
};

export default FormCreateEvents;
