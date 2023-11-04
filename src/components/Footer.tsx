import { MdAdd, MdSearch } from "react-icons/md";
import { Link } from "react-md";

const Footer = () => {
  return (
    <footer className="fixed bottom-10 flex justify-center w-full">
      <div className="max-w-lg w-full flex gap-8 justify-center">
        <div className="tooltip" data-tip="Buscar Evento">
          <Link href={"/list-events"} className="btn btn-primary">
            <MdSearch className="w-[1.5rem] h-[1.5rem]" />
          </Link>
        </div>
        <div className="tooltip" data-tip="Crear Evento">
          <Link href={"/create-event"} className="btn btn-primary">
            <MdAdd className="w-[1.5rem] h-[1.5rem]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
