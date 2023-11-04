const Header = () => {
  return (
    <header className="flex items-center gap-4 mx-auto w-fit">
      <figure className="object-cover w-8 h-8">
        <img src="/assets/logo.svg" alt="Logo de SportCircle" />
      </figure>
      <h1 className="font-extrabold	text-[2rem] text-primary">Sport Circle</h1>
    </header>
  );
};

export default Header;
