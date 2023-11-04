interface Props {
  className?: string;
}

const Header = ({ className = "" }: Props) => {
  return (
    <header className={`${className} flex items-center gap-4 mx-auto w-fit`}>
      <figure className="object-cover w-8 h-8">
        <img src="/assets/logo.svg" alt="Logo de FITNET" />
      </figure>
      <h1 className="font-extrabold	text-[2rem] text-primary">FITNET</h1>
    </header>
  );
};

export default Header;
