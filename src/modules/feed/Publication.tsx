import Image from "next/image";
import { MdMessage, MdModeComment, MdPerson } from "react-icons/md";

export interface PublicationProps {
  id: number;
  title: string;
  createdBy: number;
  description: string;
  userName: string;
  multi: string;
  isVideo: boolean;
  handleShowModal: () => void;
}
const Publication = ({
  userName,
  title,
  description,
  multi,
  isVideo,
  handleShowModal,
}: PublicationProps) => {
  if (isVideo) return null;
  return (
    <article className="rounded-lg overflow-hidden border-[1px]">
      <div>
        {!isVideo ? (
          <Image
            src={multi}
            className="object-cover"
            width={320}
            height={120}
            alt=""
          ></Image>
        ) : (
          <video src={multi}></video>
        )}
      </div>
      <div className="px-4 py-2 flex flex-col gap-1">
        <span className="flex items-center gap-2 font-bold text-gray-900 text-[1rem]">
          <MdPerson /> {userName}
        </span>
        <h4>{title}</h4>
        <p>{description}</p>
        <button
          className="flex items-center gap-2 w-fit text-[0.8rem]"
          onClick={handleShowModal}
        >
          <MdMessage className="w-[1rem] h-[1rem]" />
          Comentarios
        </button>
      </div>
    </article>
  );
};

export default Publication;
