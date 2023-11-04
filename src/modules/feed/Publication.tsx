import Image from "next/image";

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
    <article>
      <div className="relative">
        <span className="absolute top-2 left-2 font-bold text-white ">
          {userName}
        </span>
        {isImage ? (
          <Image
            src={media}
            className="object-cover"
            width={320}
            height={120}
            alt=""
          ></Image>
        ) : (
          <video src={media}></video>
        )}
      </div>

      <button className="btn btn-ghost" onClick={handleShowModal}>
        Comentarios
      </button>
    </article>
  );
};

export default Publication;
