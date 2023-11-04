import Header from "@/components/Header";
import FormLogin from "@/modules/login/FormLogin";

const LoginPage = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center gap-6">
      <Header />
      <FormLogin />
    </section>
  );
};

export default LoginPage;
