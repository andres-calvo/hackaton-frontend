import Modal from "@/components/Modal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ModalCommentsProps, CommentProps } from "./types";
import Comment from "./Comment";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";

const ModalComments: React.FC<ModalCommentsProps> = ({
  isOpen,
  closeModal,
  publicationId,
}) => {
  const { register, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      newComment: "",
    },
  });

  const listRef = useRef<HTMLDivElement>(null);
  const [comments, setComments] = useState<CommentProps[]>([
    {
      id: "ddd",
      name: "Usuario 1",
      text: "Este es el comentario del Usuario 1.",
    },
    {
      id: "fff",
      name: "Usuario 2",
      text: "Este es el comentario del Usuario 2.",
    },
  ]);
  const { data } = useQuery<CommentProps[]>({
    queryKey: ["ModalComments", publicationId, comments.map((el) => el.id)],
    queryFn: () => {
      return comments;
    },
  });
  useEffect(() => {
    if (listRef.current) {
      listRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  const handleNewComment = ({ newComment }: { newComment: string }) => {
    //
    setComments((prev) => [
      ...prev,
      { id: uuidv4(), name: "Usuario2", text: newComment },
    ]);
  };

  // Manejador de eventos para la tecla Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleNewComment({ newComment: getValues().newComment });
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mt-4">
        <ul className="max-h-52 h-full overflow-auto mt-4">
          {data?.map((el) => (
            <Comment id={el.id} name={el.name} text={el.text} key={el.id} />
          ))}
          <div ref={listRef}></div>
        </ul>

        <input
          type="text"
          placeholder="Escribe un comentario"
          className="input input-bordered w-full max-w-xs mt-4"
          {...register("newComment", {
            required: true,
          })}
          onKeyDown={handleKeyDown}
        />
      </div>
    </Modal>
  );
};

export default ModalComments;
