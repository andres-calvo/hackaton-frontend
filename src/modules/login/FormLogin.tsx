import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
interface FormInputs {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onLogin = (values: FormInputs) => {
    //Send values to backend
    router.push("/feed");
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-4">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Ingresa tu correo</span>
        </label>
        <input
          type="email"
          placeholder="Escribe aquí"
          className="input input-bordered w-full max-w-xs"
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Ingresa tu contraseña</span>
        </label>
        <input
          type="password"
          placeholder="Escribe aquí"
          className="input input-bordered w-full max-w-xs"
          {...register("password", {
            required: true,
          })}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Iniciar sesión
      </button>

      <div>
        <p>
          Si no tienes una cuenta,{" "}
          <Link href={"/register"} className="link">
            Registrate
          </Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
