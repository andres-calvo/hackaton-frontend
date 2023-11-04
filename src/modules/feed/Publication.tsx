import Image from "next/image";
import { MdMessage, MdModeComment, MdPerson } from "react-icons/md";

export interface PublicationProps {
  id: number;
  userName: string;
  media: string;
  isImage: boolean;
  handleShowModal: () => void;
}
const Publication = ({
  userName,
  media,
  isImage,
  handleShowModal,
}: PublicationProps) => {
  return (
    <article className="rounded-lg overflow-hidden border-[1px]">
      <div>
        {isImage ? (
          <Image
            src={media}
            className="object-cover"
            width={320}
            height={120}
            alt=""></Image>
        ) : (
          <video src={media}></video>
        )}
      </div>
      <div className="px-4 py-2 flex flex-col gap-1">
        <span className="flex items-center gap-2 font-bold text-gray-900 text-[1rem]">
          <MdPerson /> {userName}
        </span>
        <button
          className="flex items-center gap-2 w-fit text-[0.8rem]"
          onClick={handleShowModal}>
          <MdMessage className="w-[1rem] h-[1rem]" />
          Comentarios
        </button>
      </div>
    </article>
  );
};

export default Publication;
