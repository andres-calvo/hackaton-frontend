import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  birthdate: string;
}

const FormRegister = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormInputs>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      birthdate: "",
    },
  });

  const router = useRouter();

  const onRegister = (values: RegisterFormInputs) => {
    router.push("/login");
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onRegister)}
      className="flex flex-col gap-4 w-[80%] max-w-lg mx-auto">
      <div className="form-control w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Ingresa tu nombre</span>
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

      <div className="form-control w-full">
        <label htmlFor="email" className="label">
          <span className="label-text">Ingresa tu correo</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("email", {
            required: true,
          })}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="password" className="label">
          <span className="label-text">Ingresa tu contraseña</span>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("password", {
            required: true,
          })}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="birthdate" className="label">
          <span className="label-text">Ingresa tu fecha de nacimiento</span>
        </label>
        <input
          id="birthdate"
          type="date"
          placeholder="Escribe aquí"
          className="input input-bordered w-full"
          {...register("birthdate", {
            required: true,
          })}
        />
      </div>

      <button className="btn btn-primary w-full font-bold">Registrarse</button>
    </form>
  );
};

export default FormRegister;
