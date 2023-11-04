import Header from "@/components/Header";
import FormRegister from "@/modules/register/FormRegister";

const Register = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full gap-6">
      <Header />
      <FormRegister />
    </section>
  );
};

export default Register;
